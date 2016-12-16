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


	}

    //image
    var spaceBubbsImg = new Image();
    spaceBubbsImg.src = "images/space_bubbs.jpg"; // Change from previously listed code; image src location is different

    //box
    function gameLoop() {
        window.setTimeout(gameLoop, 40);
        drawScreen();
    }

    gameLoop();
}