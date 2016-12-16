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
	var context = theCanvas.getContext("2d");
	var cWidth = theCanvas.style.width;
	var cHeight = theCanvas.style.height;
    cWidth = "900px";
    cHeight = "600px";

  function drawScreen() {
		//background
		context.globalAlpha = 1;
		context.fillStyle = "#000000";
        context.fillRect(0, 0, cWidth, cHeight);
		//image
        context.globalAlpha = 0.8;
		context.drawImage(spaceBubbsImg, 0, 0, 900, 600);
		//text
		context.font         = "72px Limelight, cursive";
//		font-family: 'Limelight', cursive;
		context.textBaseline = "top";

        fadeArray.forEach(function(fadeOb){
            if (fadeOb.fadeIn) {
                fadeOb.alpha += 0.04;
                if (fadeOb.alpha >= .8)  {
                    fadeOb.alpha = .8;
                    fadeOb.fadeIn = false;
                }
            } else {
                fadeOb.alpha -= 0.02;
                if (fadeOb.alpha < .1)  {
                    fadeOb.alpha = .1;
                    fadeOb.fadeIn = true;
                }
            }
            context.globalAlpha = fadeOb.alpha;
            context.fillStyle = "#FFFFFF";
            context.fillText(fadeOb.text, 150, fadeOb.y);
        });
	}

    // text objects
    var fade1 = { alpha: 0.3, fadeIn: true, text:"Your're", y: 100 };
    var fade2 = { alpha: 0.2, fadeIn: true, text:".not", y: 160 };
    var fade3 = { alpha: 0.1, fadeIn: true, text: "..really", y: 220 };
    var fade4 = { alpha: 0.0, fadeIn: true, text: "...here.", y: 280 };
    var fadeArray = [fade1, fade2, fade3, fade4];

    //image
    var spaceBubbsImg = new Image();
    spaceBubbsImg.src = "images/space_bubbs.jpg"; // Change from previously listed code; image src location is different
    //box
    function gameLoop() {
        window.setTimeout(gameLoop, 20);
        drawScreen();
    }

    gameLoop();
}