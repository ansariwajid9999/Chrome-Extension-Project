let body = document.querySelector("body");

let btnBQ = document.createElement("button");
btnBQ.setAttribute("id", "btnBQ");
btnBQ.addEventListener("click", doSomething);
body.appendChild(btnBQ);

function doSomething(){
  if(btnBQ.hasAttribute("listening") === false){
    btnBQ.setAttribute("listening", true);
    console.log("I am all ears");
  } else {
    btnBQ.removeAttribute("listening");
    console.log("I am not listening anymore");
  }
}