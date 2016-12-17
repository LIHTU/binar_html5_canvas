window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded () {
	canvasApp();
}

function canvasSupport () {
  return Modernizr.canvas;
}

function canvasApp () {

  if (!canvasSupport()) {
	return;
  }

	var theCanvas = document.getElementById("canvasOne");
	var ctx = theCanvas.getContext("2d");
	var cWidth = 960;
    var cHeight = 640;

  function drawScreen() {

		//background
		ctx.globalAlpha = 1;
		ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, cWidth, cHeight);

        // grid
        ctx.lineWidth = 1;
        var xPen = 0;
        while (xPen < cWidth) {
            xPen += 64;
            ctx.beginPath();
            ctx.moveTo(xPen, 0);
            ctx.lineTo(xPen, cHeight);
            ctx.strokeStyle = "#ce761c";
            ctx.stroke();
        }

        var yPen = 0;
        while (yPen < cHeight) {
            yPen += 64;
            ctx.beginPath();
            ctx.moveTo(0, yPen);
            ctx.lineTo(cWidth, yPen);
            ctx.strokeStyle = "#ce761c";
            ctx.stroke();
        }

        var centerX = 0;
        var centerY = 0;
        var inc = 128;
        var radius = inc/4.0;
        var sArc = 0;
        var eArc = 0.5*Math.PI;
        var arcStrokes = [1,4];
        var quadrant = 0;

        while (centerX < cWidth + inc) {
            while (centerY < cHeight + inc) {
                while (quadrant <= 3) {
                    ctx.lineWidth = arcStrokes[Math.floor(Math.random()+0.5)];
                    console.log(ctx.lineWidth);
                    ctx.beginPath()
                    ctx.arc(centerX, centerY, radius, sArc, eArc);
                    ctx.stroke()
                    quadrant++;
                    sArc += 0.5 * Math.PI;
                    eArc += 0.5 * Math.PI;
                }
                centerY += inc;
                quadrant = 0;
                sArc = 0;
                eArc = 0.5*Math.PI;
            }
            centerX += inc;
            centerY = 0;
        }



	}

    //image
    var spaceBubbsImg = new Image();
    spaceBubbsImg.src = "images/space_bubbs.jpg"; // Change from previously listed code; image src location is different

    var CircOb = function() {
        this.rad = 24;
    }

    CircOb.prototype.get_rad = function() {
        return this.rad;
    }






    //box
    function gameLoop() {
        window.setTimeout(gameLoop, 400);
        drawScreen();
    }

    gameLoop();
}