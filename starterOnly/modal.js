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
const close=document.querySelector(".close")
const heroSection=document.querySelector(".hero-section")
const topnav=document.querySelector(".topnav")
const footer=document.querySelector("footer")
// launch modal event
modalBtn.addEventListener("click", launchModal);


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
 // document.body.style.overflow="hidden";
   heroSection.style.display="none"    
    topnav.style.display="none"
   footer.style.display="none"
   if(window.matchMedia("(max-width:426px)").matches) {
    topnav.style.display="block"
}
}//fermer le modal on appuiyant sue le croix
  close.addEventListener("click",function(){
     
  modalbg.style.display = "none";
  document.body.style.overflow="auto"
   heroSection.style.display="block"
    topnav.style.display="block"
    footer.style.display="block"
 }) 

/*adapter les element du formulaire *******************************/

 
 function message(){
  console.log("je suis le msg")
  myform.style.display="none"
const modalbody=document.querySelector(".modal-body")
  modalbody.innerHTML=`<p class=message>Merci pour votre inscription</p><button class="btn-fermer btn-submit">fermer</button>`
  modalbody.style.height="55rem"
  //recuperer le boutton pour fermer le modal
  let fermer=document.querySelector(".btn-fermer")
   
  //on rattache le boutton fermer a la class modalbody
  modalbody.appendChild(fermer)
  fermer.addEventListener("click",function(){modalbg.style.display="none"})
} 

 // recuperation du formulaire
 let myform=document.getElementById("Myform");
 let validate=false;
 myform.addEventListener("submit",function(event){
  event.preventDefault()
   let erreur=document.getElementById("error")
   //recuperer champ prenom **************************
   let RegExp=/^[a-zA-Z-\s]+$/; 
   let Prenom=document.getElementById("firstname");
  
        console.log('nom')
        if(Prenom.value=="" && RegExp.test(Prenom.value)==false){

          erreur.innerHTML="Veuillez entrer 2 caractères ou plus" 
          validate=false                           
          
        }else {           
          validate=true
             console.log(Prenom.value)
             localStorage.setItem('Prenom',Prenom.value);
                   
        }
console.log("prenom apres",validate)
 //recuperer champ nom***************************************
let erreurN=document.querySelector(".errorN")  
  
let Nom=myform.last
     
    if(Nom.value=="" && RegExp.test(Nom.value)==false){       
      
      erreurN.innerHTML="Veuillez entrer 2 caractères ou plus"       
       
      validate=false
    }else{  
      console.log("bien recu nom")
      validate=true
      localStorage.setItem('inputNom', Nom.value);
    
     }

   
 // email*******************************************
 
 let erreurE=document.getElementById("errorE")      
 //recuperer champ email
 let inputEmail=myform.email;
 let RegExpEmail=/^[a-zA-Z0-9._]+[@]{1}[a-zA-Z0-9._]+[.]{1}[a-z]{2,10}$/
     if(inputEmail.value=="" && RegExpEmail.test(inputEmail.value)==false){
       
       erreurE.innerHTML="le champ doit etre au format mail"       
     validate=false
     }else {   
      console.log("bien recu mail")
      validate=true
      localStorage.setItem('inputEmail', inputEmail.value);
    
    } 
//date de naissance**********************************************
     let erreurD=document.getElementById("errorD")
     
        //recuperer champ date de naissance
        let inputDate=myform.birthdate;
        //let RegExpDate=/^\d{2}.\d{2}.\d{4}$/
            if(inputDate.value==""){           
               
              erreurD.innerHTML="Vous devez entrer votre date de naissance"            
            validate=false
            }else { validate=true     
              console.log("bien recu birtday")
             }
 // verifier le nb de fois******************************************           
 let erreurQ=document.getElementById("errorQ")
    
 //recuperer champ quantite
 let inputQuantity=myform.quantity;
  
     if(inputQuantity.value==""){
     
       
       erreurQ.innerHTML="entre un nb entre 0 et 99"        
     validate=false
     }else{  validate=true
      console.log("bien recu quantite")       
     } 

      //verifier que un input radio est cocher *********************    
        
      
 // let location=document.querySelector("")
 //let location=myform.location
 let locations=document.querySelectorAll("input")
      for(let i=1;i<locations.length+1;i++){ 
 
            if(locations[i].checked){
             console.log(locations[i].value)
                    validate=true
                    break        
            } else{  
              console.log("Il faut choisir une location")
              let erreurL=document.querySelector(".errorL")
              erreurL.innerHTML="Il faut choisir une location"
               validate=false                    
          }                  
        }   
       
   //recuperer la check obligatoire******************************     
     if(document.querySelector('#checkbox1').checked){           
      validate=true  
    } else{           
      let accepter=document.querySelector("#accepter")
      accepter.innerHTML="Vous devez vérifier si vous acceptez les conditions"       
    }   
    //verifier si tous les champs sont validé
    if(validate){
      message()
    }
    })
  
     
      
   