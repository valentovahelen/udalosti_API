let odstavec = document.querySelector(".odstavec");
odstavec.style.fontSize = "16px";

function ztucni() {
    odstavec.style.fontWeight = "bold";
}

function odtucni() {
    odstavec.style.fontWeight = "lighter";
}

/* UKOL 1 */

function zmenBarvu() {
    odstavec.classList.toggle("cervena");
}

/* UKOL 2 */

function zvetsiPismo(){
    var el = document.querySelector(".odstavec");
    var style = window.getComputedStyle(odstavec, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
    el.style.fontSize = (fontSize + 1) + 'px';
}

/* UKOL 3 */

let zvuk = document.querySelector("#zvuk");

function start(){
    zvuk.play();
}

function stop(){
    zvuk.pause();
}

function reset(){
    zvuk.currentTime = 0;
}

function nula(){
    zvuk.volume = 0;
}

function pul(){
    zvuk.volume = 0.5;
}

function jedna(){
    zvuk.volume = 1;
}
