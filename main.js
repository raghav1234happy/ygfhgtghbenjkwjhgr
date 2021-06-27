song="";

function preload() {
	song = loadSound("music.mp3");
}

function setup(){
	canvas=createCanvas(600,500);
	canvas.center();

	video=createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotResults);
}

function gotResults(results){
	if(results.length>0){
		console.log(results);
	}

}

function modelLoaded(){
	console.log("Model is loaded");
}

function draw(){
	image(video,0,0,600,500);
}

function play(){
	song.play();
	set.voloume(1);
	set.rate(1);
}