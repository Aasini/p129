song=""
scoreleftwrist=0;
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;

function preload()
{
}

function setup()
{
    canvas=createCanvas(550,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modeloaded);
posenet.on('poses',gotPoses);
}


function draw()
    {
image(video,0,0,600,500);
fill('#90ee90');
stroke('#ffb6c1');
circle(leftwristX,leftwristY,20);
if(scoreleftwrist > 0.2)
{
circle(leftwristX,leftwristY,20);
InNumber=leftwristY=(leftwristY);
remove_decimals=floor(InNumberleftwristy);
volume=remove_decimals/500;
document.getElementById("volume").innerHTML="volume=" + volume;
song.setVolume(volume);
}
    }


    function modeloaded()
    {
        console.log('Posenet is initialized');
    }


    function gotPoses(results)
{
    if(results.length > 0 );
    {
        console.log(results);

        leftwristX=results[0].pose.leftwrist.x;

leftwristY=results[0].pose.leftwrist.y;
console.log("leftwristX = " + leftwristX + "leftwristY = " + leftwristY );

scoreleftwrist=results[0].pose.keypoints[9].score;
console.log("scoreleftwrist= + scoreleftwrist");

rightwristX=results[0].pose.rightwrist.x;
rightwristY=results[0].pose.rightwrist.y;
console.log("rightwristX = " + rightwristX + "rightwristY = " + rightwristY);
    }
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
    
}