left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function preload(){}

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(900,500);
    canvas.position(600, 150);

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        right_wrist_x = results[0].pose.rightWrist.x;
        left_wrist_x = results[0].pose.leftWrist.x;
        difference = left_wrist_x - right_wrist_x; 
        console.log("right wrist: ", right_wrist_x);
        console.log("left wrist: ", left_wrist_x);
        console.log("difference: ", difference);
    }
}

function modelLoaded(){
    console.log("PoseNet is Initialised");
}

function draw(){
    background('#969a97');
    textSize(difference);
    stroke('#eba134');
    text(document.getElementById("words").value , 50 , 400);
    document.getElementById("text_size").innerHTML = "font size of the text will be " + Math.floor(difference) + "px";
}
