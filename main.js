Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});
var Cam = document.getElementById("Camera");
Webcam.attach('#Camera');

function snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("Result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}
console.log('ML5 version:',ml5.version);

var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Jl3tuEvC6/model.json', modelLoaded);
function modelLoaded(){
    console.log('Model loaded!');
}
