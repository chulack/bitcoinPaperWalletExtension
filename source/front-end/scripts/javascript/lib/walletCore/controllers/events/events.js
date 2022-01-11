"use strict";


// events for the receive view

document.querySelector("#newAddress").addEventListener("click", ()=>{

    Controller.restart();

});

document.querySelector("#privateAddress").addEventListener("click", ()=>{

    Controller.copyPrivateAddress();

});

