var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;

    console.log(Content);
    if(Content == "take my selfie"){
        speak()
    }

   

}
function speak(){
    var synth = window.speechSynthesis;
    var content = "taking your selfie in 5 seconds"
    var utterthis = new SpeechSynthesisUtterance(content);
    synth.speak(utterthis)
    Webcam.attach(camera)
    setTimeout(function(){
        takesnapshot()
    },5000)
}
Webcam.set({
    width : 320,
    height : 240,
    image_format:"jpeg",
    jpeg_quality : 90
})

var camera = document.getElementById("camera")

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ="<img src = "+data_uri+" id = 'CapturedIMG'>"
    })
    save()
}

function save(){
    link = document.getElementById("link")
    image = document.getElementById("CapturedIMG").src;
    link.href = image
    link.click()
}

