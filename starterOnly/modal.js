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
let erreur = document.querySelectorAll(".error");
let erreurP = document.querySelector(".errorP");
let erreurN = document.querySelector(".errorN");
let erreurE = document.querySelector(".errorE");
let erreurD = document.getElementById("errorD");
let erreurQ = document.getElementById("errorQ");
let erreurL = document.querySelector(".errorL");
let accepter = document.querySelector("#accepter");
// launch modal event
modalBtn.addEventListener("click", launchModal);

// launch modal form
function launchModal() {
    myform.style.display = "inline";
    modalbg.style.display = "block";
    heroSection.style.display = "none";
    topnav.style.display = "none";
    footer.style.display = "none";
    //une condition pour que le topnav s'affiche de nouveau on ouvrant le modal*******
    if (window.matchMedia("(max-width:426px)").matches) {
        topnav.style.display = "inline-flex";
    }
} //fermer le modal on appuiyant sur le croix
close.addEventListener("click", function () {
    modalbg.style.display = "none";
    heroSection.style.display = "inline";
    heroSection.style.display = "grid";
    if (window.matchMedia("(max-width:768px)").matches) {
        heroSection.style.display = "block";
    }
    topnav.style.display = "inline-flex";
    footer.style.display = "inline";
});
//la fonction pour apparaitre le message de validation
function message() {
    myform.style.display = "none";
    const modalbody = document.querySelector(".modal-body");
    modalbody.innerHTML += `<p class="message">Merci pour votre inscription</p><button class="btn-fermer btn-submit">fermer</button>`;
    modalbody.style.height = "40rem";
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
        heroSection.style.display = "block";
        heroSection.style.display = "grid";
        if (window.matchMedia("(max-width:768px)").matches) {
            heroSection.style.display = "block";
        }
        topnav.style.display = "inline-flex";
        footer.style.display = "block";
    });
}
/*adapter les element du formulaire *******************************/
let validate = false;
myform.addEventListener("submit", function (event) {
    //recuperer champ prenom **************************
    let Prenom = document.getElementById("firstname");
    let RegExp = /^[a-zA-Z-\s]+$/;
    if (Prenom.value == "" || RegExp.test(Prenom.value) == false) {
        erreurP.innerHTML = "Veuillez entrer 2 caractères ou plus";
        validate = false;
        event.preventDefault();
    } else {
        validate = true;
        erreurP.innerHTML = "";
    }
    //recuperer champ nom***************************************
    let Nom = myform.last;
    if (Nom.value == "" || RegExp.test(Nom.value) == false) {
        erreurN.innerHTML = "Veuillez entrer 2 caractères ou plus";
        validate = false;
        event.preventDefault();
    } else {
        validate = true;
        erreurN.innerHTML = "";
    }

    //recuperer champ email***********************************
    let inputEmail = myform.email;
    let RegExpEmail = /^[a-zA-Z0-9._]+[@]{1}[a-zA-Z0-9._]+[.]{1}[a-z]{2,10}$/;
    if (inputEmail.value == "" || RegExpEmail.test(inputEmail.value) == false) {
        erreurE.innerHTML = "le champ doit etre au format mail";
        validate = false;
        event.preventDefault();
    } else {
        validate = true;
        erreurE.innerHTML = "";
    }
    //date de naissance**********************************************
    //recuperer champ date de naissance
    let inputDate = myform.birthdate;
    if (inputDate.value == "") {
        erreurD.innerHTML = "Vous devez entrer votre date de naissance";
        validate = false;
        event.preventDefault();
    } else {
        validate = true;
        erreurD.innerHTML = "";
    }
    // verifier le nb de fois******************************************
    //recuperer champ quantite
    let inputQuantity = myform.quantity;
    if (inputQuantity.value == "") {
        erreurQ.innerHTML = "entre un nb entre 0 et 99";
        validate = false;
        event.preventDefault();
    } else {
        validate = true;
        erreurQ.innerHTML = "";
    }
    //verifier que un input radio est cocher *********************
    let locations = document.querySelectorAll('[name="location"]');
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            console.log(locations[i].value);
            validate = true;
            erreurL.innerHTML = "";
            break;
        } else {
            console.log("Il faut choisir une location");
            erreurL.innerHTML = "Il faut choisir une location";
            validate = false;
            event.preventDefault();
        }
    }
    //recuperer la check obligatoire******************************
    if (document.querySelector("#checkbox1").checked) {
        validate = true;
        accepter.innerHTML = "";
    } else {
        validate = false;
        event.preventDefault();
        accepter.innerHTML = "Vous devez vérifier si vous acceptez les conditions";
    }
    //verifier si tous les champs sont validé
    if (validate) {
        message();
    }
});
