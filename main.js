var options = {
    "containerId": "main",
    "imageId": "sprite",
    "frameHeight": 267,
    "frameWidth": 435,
    "currentFrame": 0,
    "noOfFrames": 46,
    "intervalTime": 100,
    "repeat": true,
    "vertical": true,
};

document.addEventListener("readystatechange", function(event) {
    "use strict";
    if (document.readyState === "complete") {
        window.bgSequence = new RunBgSequence(options);
        bgSequence.init();
        bgSequence.startBgSequence();

    }
});
