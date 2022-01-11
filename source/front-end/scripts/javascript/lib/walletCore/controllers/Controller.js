"use strict";


class Controller {

  
    // setUp methods

    static makeQr(a) {
        
        document.querySelector("#keyPublic").innerHTML = `Public Key: ${a}`;
        document.querySelector("#qrcode").innerHTML = "";
        new QRCode(document.querySelector("#qrcode"), `bitcoin:${a}`);

    }

    static makeAvatar(a) {
        
        document.querySelector("#avatarImgReceive").src = `https://avatars.dicebear.com/api/identicon/${a}.svg`;

    }

    static makeWallet() {

        let newPair = buidl.createP2PKH();
        localStorage.setItem("publicAddress", newPair.addr);

        localStorage.setItem("privateAddress", newPair.pk);

        localStorage.setItem("walletSet", true);

    }

    static loadWallet() {

        Model.publicAddress = localStorage.getItem("publicAddress");


        Model.privateAddress = localStorage.getItem("privateAddress");



        this.makeQr(Model.publicAddress);


    }


    static copyPrivateAddress() {


        document.getElementById("thePrivateAddress").classList.remove("hideIt");
        document.getElementById('thePrivateAddress').value = Model.privateAddress;
        document.getElementById("thePrivateAddress").select();
        document.execCommand("copy");
        document.getElementById("thePrivateAddress").classList.add("hideIt");

    }

  // start
   static startUp() {


        localStorage.getItem("walletSet") != "true" ? this.makeWallet() :  "";
        this.makeAvatar(localStorage.getItem("publicAddress"));
        this.loadWallet();
       
  
    }

    static restart() {


        localStorage.setItem("walletSet", "false");
        this.startUp();
       
  
    }

    
}        

Controller.startUp();



