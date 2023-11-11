// In Dom tree sabse bahar hota h document fir body baad me sab kuchh

// we are adding the button in the body, so we remove body, create button
// , abhi page ka hissa nahi h , to id set karde , body me add kar lete h 
// page me button dikhega nahi directly , inspect -> element -> ekdum nechhe
let body = document.querySelector("body");

let btnBQ = document.createElement("button");
btnBQ.setAttribute("id", "btnBQ");
btnBQ.addEventListener("click", doSomething);
body.appendChild(btnBQ);

let speechRecognition = new webkitSpeechRecognition();
speechRecognition.continous = true;
speechRecognition.interimResults = true;
speechRecognition.lang = "en-us";

// The movement you take pause after speaking onresult event is fired and whatever you said is collected in transcript.

let transcript = "";
speechRecognition.onresult = function(event){
  transcript = "";
  for( let i = 0; i< event.results.length; ++i) {
    transcript += event.results[i][0].transcript;
  }
};

// document.addEventListener('keypress', handleKbd);

// function handleKbd(event) {
//   if (event.shiftKey && event.altKey && event.code === 'KeyQ') {
//     btnBQ.click();
//   }
// }

// Add event listener to the document to listen for keydown events
document.addEventListener('keydown', function(event) {
  // Check if the key combination is Ctrl + Alt + K
  if (event.ctrlKey && event.altKey && event.key === 'K') {
    // Call the function when the shortcut is pressed
    btnBQ.click();
  }
});

function doSomething(){
  if(btnBQ.hasAttribute("listening") === false){
    btnBQ.setAttribute("listening", true);
    speechRecognition.start();
  } else {
    btnBQ.removeAttribute("listening");
    speechRecognition.stop();
    const myPopup = new Popup({
      id: "my-popup",
      title: "Here is what you said:",
      content: transcript,
    });
    myPopup.show();
  }
}