    var EVENT = {
        "0": "NONE",
        "1": "CAPTURING_PHASE",
        "2": "AT_TARGET",
        "3": "BUBBLING_PHASE"
    };
    var myCanvas,
        context,
        mainContainer;
    document.addEventListener("readystatechange", function(event) {
        "use strict";
        // console.info("readyState: " + document.readyState);
        // console.info("type: " + event.type);
        // console.info("eventPhase: " + EVENT[event.eventPhase]);
        if (document.readyState === "complete") {
            myCanvas = document.createElement("canvas");
            context = myCanvas.getContext("2d");
            myCanvas.setAttribute("id", "myCanvas");

            mainContainer = document.getElementById("main");
            myCanvas.width = mainContainer.clientWidth;
            myCanvas.height = mainContainer.clientHeight;
            mainContainer.appendChild(myCanvas);

            window.addEventListener("resize", function(event) {
                onWindowResize(event);
            });

            drawImage();
            setTimeout(function() {
                startAnimation();
            }, 100)
        }
    });

    var frameWidth = 161;
    var frameHeight = 82;
    var currentFrame = 0;
    var noOfFrames = 12;

    var drawImage = function() {
        var img = document.getElementById("sprite");
        var sx = 0;
        var sy = currentFrame * frameHeight;
        var sWidth = frameWidth;
        var sHeight = frameHeight;
        var dx = 0;
        var dy = 0;
        var dWidth = mainContainer.clientWidth;
        var dHeight = mainContainer.clientHeight;
        context.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }

    var animationInterval;

    var startAnimation = function() {
        animationInterval = window.setInterval(function() {
            currentFrame++;
            if (currentFrame === (noOfFrames)) {
                currentFrame = 0;
            }
            // console.log("currentFrame: " + currentFrame);
            drawImage();
        }, 100);
    }

    var stopAnimation = function() {
        window.clearInterval(animationInterval);
    }

    var onWindowResize = function(event) {
        myCanvas.width = mainContainer.clientWidth;
        myCanvas.height = mainContainer.clientHeight;
        drawImage();
    }
