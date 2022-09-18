function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);


    canvas=createCanvas(550, 550);
    canvas.position(560, 120);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.y;
difference=floor(leftWristX-rightWristX);

}
}


function modelLoaded(){
    console.log('poseNet is initialized!');

}

function draw(){
    background('#800080');
    document.getElementById("text_size").innerHTML="font-size of the text will be= "+ difference +"px";
    textSize(difference);
    fill("#00FF00");
    text('Neil', 50, 400);
}