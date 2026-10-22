let video;
let bodyPose;
let pose = [];
let poseready = false;

function preload() {
  bodyPose = ml5.bodyPose();
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  bodyPose.detectStart(video, gotPoses);
  poseReady = true;
}

function gotPoses(results) {}

function draw() {}

function leftHandUp() {}
function rightHandUp() {}
function leftHandDown() {}