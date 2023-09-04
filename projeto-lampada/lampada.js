const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')
const btn = document.querySelector('#Refresh')

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}


function lampOn () {
    if (!isLampBroken()){
    lamp.src='./img/ligada.png'
}

}

function lampOff (){
    if(!isLampBroken()) {
        lamp.src='./img/desligada.png'
    }
}


function lampque (){
        return lamp.src='./img/quebrada.png'
    }

function trocar () {
    if(!isLampBroken ())
    return btn.addEventListener("click", function() {
location.reload();
    });
}



TurnOn.addEventListener('click', lampOn);
TurnOff.addEventListener('click', lampOff);

lamp.addEventListener('mouseover', lampOn)

lamp.addEventListener('mouseleave', lampOff)

lamp.addEventListener('dblclick', lampque);

lamp.addEventListener('click', trocar);