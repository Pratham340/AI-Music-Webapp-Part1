function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();
    canvas.position(470, 150);
	video = createCapture(VIDEO);
	video.hide();
}