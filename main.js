var sr = window.webkitSpeechRecognition;
var SpeechRecognition = new sr();

function start(){
 document.getElementById("textBox").innerHTML="";
 SpeechRecognition.start();
}

SpeechRecognition.onresult = function run(event){
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("textBox").innerHTML=content;
}