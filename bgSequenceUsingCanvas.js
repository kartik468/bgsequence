var RunBgSequence = (function() {
    function RunBgSequence(options) {
        this.containerId = options.containerId;
        this.imageId = options.imageId;
        this.frameHeight = options.frameHeight;
        this.frameWidth = options.frameWidth;
        this.currentFrame = options.currentFrame || 0;
        this.noOfFrames = options.noOfFrames;
        this.intervalTime = options.intervalTime || 100;
        this.repeat = options.repeat || false;
        this.vertical = options.vertical || true;

        this.container;
        this.image;
        this.canvas;
        this.context;
        this.animationInterval;
    }

    RunBgSequence.prototype.init = function() {
        this.container = document.getElementById(this.containerId);

        this.image = document.getElementById(this.imageId);

        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.setAttribute(this.containerId + "-canvas");
        this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;
        this.contaier.appendChild(this.canvas);
    }

    RunBgSequence.prototype.drawImage = function() {
        var img = this.image;
        var sx = 0;
        var sy = this.currentFrame * this.frameHeight;
        var sWidth = this.frameWidth;
        var sHeight = this.frameHeight;
        var dx = 0;
        var dy = 0;
        var dWidth = this.container.clientWidth;
        var dHeight = this.container.clientHeight;
        context.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }

    RunBgSequence.prototype.startBgSequence = function(){
    	this.animationInterval = window.setInterval(function() {
            this.currentFrame++;
            if (this.currentFrame === (this.noOfFrames)) {
                this.currentFrame = 0;
            }
            // console.log("currentFrame: " + currentFrame);
            this.drawImage();
        }, 100);
    }

    RunBgSequence.prototype.updateCanvasDimensions = function(){
    	this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;
        this.drawImage();
    }

    RunBgSequence.prototype.stopBgSequence = function(){
    	window.clearInterval(this.animationInterval);
    }

    return RunBgSequence;
})();

var options = {
    "containerId": "main",
    "imageId": "sprite",
    "frameHeight": 82,
    "frameWidth": 161,
    "currentFrame": 0,
    "noOfFrames": 12,
    "intervalTime": 100,
    "repeat": true,
    "vertical": true,
}
