function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelector(".modal-btn");
const formData = document.querySelector(".formData");
const close = document.querySelector(".close");
const heroSection = document.querySelector(".hero-section");
const topnav = document.querySelector(".topnav");
const footer = document.querySelector("footer");
let myform = document.getElementById("Myform");
let Prenom = document.getElementById("firstname");
let Nom = myform.last;
let inputEmail = myform.email;
let inputDate = myform.birthdate;
let inputQuantity = myform.quantity;
let erreur = document.querySelectorAll(".error");
let erreurP = document.querySelector(".errorP");
let erreurN = document.querySelector(".errorN");
let erreurE = document.querySelector(".errorE");
let erreurD = document.getElementById("errorD");
let erreurQ = document.getElementById("errorQ");
let erreurL = document.querySelector(".errorL");

// launch modal event
modalBtn.addEventListener("click", launchModal);
// launch modal form
function launchModal() {
    myform.style.display = "inline";
    modalbg.style.display = "block";
    heroSection.style.display = "none";
    topnav.style.display = "none";
    footer.style.display = "none";
    //une condition pour que le topnav s'affiche on ouvrant le modal*******
    if (window.matchMedia("(max-width:426px)").matches) {
        topnav.style.display = "inline-flex";
    }
} //close le modal on appuiyant sur le croix
close.addEventListener("click", function () {
    modalbg.style.display = "none";
    //heroSection.style.display = "inline";
    heroSection.style = "";
    topnav.style.display = "inline-flex";
    footer.style.display = "inline";
});
//la fonction pour apparaitre le message de validation
function message() {
    myform.style.display = "none";
    const modalbody = document.querySelector(".modal-body");
    modalbody.innerHTML += `<p class="message">Merci pour votre inscription</p><button class="btn-fermer btn-submit">fermer</button>`;
    modalbody.style.height = "44rem";
    //recuperer le boutton pour fermer le modal
    let btnFermer = document.querySelector(".btn-fermer");
    //evenement au click sur fermer
    btnFermer.addEventListener("click", function () {
        let myform = document.getElementById("Myform");
        myform.style.display = "block";
        let modalMsg = document.querySelector(".message");
        btnFermer.remove();
        modalMsg.remove();
        modalbg.style.display = "none";
        //heroSection.style.display = "block";
        heroSection.style = "";
        topnav.style.display = "inline-flex";
        footer.style.display = "block";
    });
}
//verifier le champ prenom en input
Prenom.addEventListener("input", function (e) {
    let RegExp = /^[a-zA-Z-\s]+$/;
    if (RegExp.test(e.target.value) == false || e.target.value.length < 2) {
        erreurP.innerHTML = "Veuillez entrez au moins deux caracteres";
    } else {
        erreurP.innerHTML = "";
    }
});
//verifier le champ nom en input
Nom.addEventListener("input", function (e) {
    let RegExp = /^[a-zA-Z-\s]+$/;
    if (RegExp.test(e.target.value) == false || e.target.value.length < 2) {
        erreurN.innerHTML = "Veuillez entrez au moins deux caracteres";
    } else {
        erreurN.innerHTML = "";
    }
});
//verifier le champ mail en input
inputEmail.addEventListener("input", function (e) {
    let RegExp = /^[a-zA-Z0-9._]+[@]{1}[a-zA-Z0-9._]+[.]{1}[a-z]{2,10}$/;
    if (RegExp.test(e.target.value) == false) {
        erreurE.innerHTML = "Veuillez entrez un mail valide";
    } else {
        erreurE.innerHTML = "";
    }
});
//verifier le champ quantité en input
inputQuantity.addEventListener("input", function (e) {
    if (inputQuantity.value < 0 || inputQuantity.value > 99) {
        erreurQ.innerHTML = "Veuillez entrez un nembre entre 0 et 99";
    } else {
        erreurQ.innerHTML = "";
    }
});

inputDate.addEventListener("input", function (e) {
    let RegExp = /(\d{4})-(\d{2})-(\d{2})/;
    if (RegExp.test(e.target.value) == false) {
        erreurD.innerHTML = "Veuillez entrez une date valide";
    } else {
        erreurD.innerHTML = "";
    }
});
/*adapter les element du formulaire *******************************/

myform.addEventListener("submit", function (event) {
    event.preventDefault();
    let validate = 0;
    //recuperer champ prenom **************************
    let Prenom = document.getElementById("firstname");
    let RegExp = /^[a-zA-Z-\s]+$/;
    if (Prenom.value == "" || RegExp.test(Prenom.value) == false) {
        erreurP.innerHTML = "Veuillez entrer 2 caractères ou plus";
        validate = 0;
        event.preventDefault();
    } else {
        validate++;
        erreurP.innerHTML = "";
    }
    //verifier champ nom***************************************
    if (Nom.value == "" || RegExp.test(Nom.value) == false) {
        erreurN.innerHTML = "Veuillez entrer 2 caractères ou plus";
        validate--;
        event.preventDefault();
    } else {
        validate++;
        erreurN.innerHTML = "";
    }
    //vérifier champ email***********************************

    let RegExpEmail = /^[a-zA-Z0-9._]+[@]{1}[a-zA-Z0-9._]+[.]{1}[a-z]{2,10}$/;
    if (inputEmail.value == "" || RegExpEmail.test(inputEmail.value) == false) {
        erreurE.innerHTML = "le champ doit etre au format mail";
        validate--;
        event.preventDefault();
    } else {
        validate++;
        erreurE.innerHTML = "";
    }
    //date de naissance**********************************************
    //recuperer champ date de naissance

    let RegExpDate = /(\d{4})-(\d{2})-(\d{2})/;
    if (inputDate.value == "" || RegExpDate.test(inputDate.value) == false) {
        erreurD.innerHTML = "Vous devez entrer votre date de naissance";
        validate--;
        event.preventDefault();
    } else {
        validate++;
        erreurD.innerHTML = "";
    }
    // verifier le nb de fois******************************************
    if (inputQuantity.value == "" || inputQuantity.value < 0 || inputQuantity.value > 99) {
        erreurQ.innerHTML = "entre un nb entre 0 et 99";
        validate--;
        event.preventDefault();
    } else {
        validate++;
        erreurQ.innerHTML = "";
    }
    //verifier que un input radio est cocher *********************
    let locations = document.querySelectorAll('[name="location"]');
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            validate++;
            erreurL.innerHTML = "";
            break;
        }
    }
    if (validate < 6) {
        erreurL.innerHTML = "Il faut choisir une location";
        validate--;
    }
    //recuperer la check obligatoire******************************
    if (document.querySelector("#checkbox1").checked) {
        validate++;
        accepter.innerHTML = "";
    } else {
        validate--;
        event.preventDefault();

        accepter.innerHTML = "Vous devez vérifier si vous acceptez les conditions";
    }
    //verifier si tous les champs sont validé

    if (validate == 7) {
        message();
    }
});
