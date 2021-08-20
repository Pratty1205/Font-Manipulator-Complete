function setup() {
    canvas = createCanvas(400, 300);
    video = createCapture(VIDEO);
    video.size(400, 300);
    canvas.position(650, 200);
    video.position(200, 200);
    posenet = ml5.poseNet(video, model_loaded);
    posenet.on("pose", getResult);
}

function model_loaded() {
    console.log("Model is not loaded");
}

function getResult(result) {
    if (result.length > 0) {
        console.log(result);
        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background("green");
    textSize(difference);
    fill("cyan");
    text("PRATTY1209", 60, 500);
}