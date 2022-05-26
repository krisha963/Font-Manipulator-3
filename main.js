difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(160,160);
    canvas = createCanvas(550,500);
    canvas.position(860,160);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    background("#2bd6d6");
    document.getElementById("font_sides").innerHTML = "Width and Height of text will be "+ difference+ "px";
    textSize(difference);
    fill("#eb34b1");
    text('Krisha', 50, 300);
}
function modelLoaded(){
    console.log("pose net is initialised");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}