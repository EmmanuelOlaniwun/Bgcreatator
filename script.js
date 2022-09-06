const body = document.querySelector("body");
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

const setBackground = () => {
    body.style.background =  
    "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

    css.innerText = body.style.background + ";";
}


color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);
