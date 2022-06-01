export default function handleValidation(name,surname,email,phoneNumber){
    let formIsValid = true;

    if(typeof name !== "undefined"){

       if(/[^a-zA-ZğüşiöçĞÜŞİÖÇ]/.test(name)){
          formIsValid = false;
       }        
    }
    
     if(typeof surname !== "undefined"){
        if(/[^a-zA-ZğüşiöçĞÜŞİÖÇ]/.test(surname)){
           formIsValid = false;
        }        
     }

    
    if(typeof email !== "undefined"){ // double check email
       let lastAtPos = email.lastIndexOf('@');
       let lastDotPos = email.lastIndexOf('.');

       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && (email).indexOf('@@') == -1 && lastDotPos > 2 && ((email).length - lastDotPos) > 2)) {
          formIsValid = false;
        }
   } 

     if(typeof phoneNumber !== "undefined"){  // double check tel
        if(!(/[^a-zA-ZğüşiöçĞÜŞİÖÇ]/.test(phoneNumber))){
           formIsValid = false;
        }        
     }

   return formIsValid;
}