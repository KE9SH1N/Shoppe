function firstNameCross(){
    const firstName = document.querySelector("#firstName").value;
    const crossIcon = document.querySelector("#fName i");
    
    if(firstName.length <= 0){
        crossIcon.classList.add("hidden");
    }
    else(
        crossIcon.classList.remove("hidden")
    )

    crossIcon.addEventListener("click", ()=>{
        document.querySelector("#firstName").value = "";
        crossIcon.classList.add("hidden");
    })
        
}

function lastNameCross(){
    const lastName = document.querySelector("#lastName").value;
    const crossIcon = document.querySelector("#lName i");
    
    if(lastName.length <= 0){
        crossIcon.classList.add("hidden");
    }
    else(
        crossIcon.classList.remove("hidden")
    )

    crossIcon.addEventListener("click", ()=>{
        document.querySelector("#lastName").value = "";
        crossIcon.classList.add("hidden");
    })
        
}

function emailCross(){
    const email = document.querySelector("#email").value;
    const crossIcon = document.querySelector("#Email i");
    
    if(email.length <= 0){
        crossIcon.classList.add("hidden");
        
    }
    else{
        crossIcon.classList.remove("hidden");
    }
    crossIcon.addEventListener("click", ()=>{
        document.querySelector("#email").value = "";
        crossIcon.classList.add("hidden");
    })
        
}


function regEmailCross(){
    const regEmail = document.querySelector("#regEmail").value;
    const crossIconBtn = document.querySelector("#rEmail i");

    if(regEmail.length <= 0 ){
        crossIconBtn.classList.add("hidden");
    }
    else{
        crossIconBtn.classList.remove("hidden");
    }
        
    crossIconBtn.addEventListener("click", ()=>{
        document.querySelector("#regEmail").value = "";
        crossIconBtn.classList.add("hidden");
    })
}

function contactNumberCross(){
    const contact = document.querySelector("#contact").value;
    const contactCrossBtn = document.querySelector("#Contact i");

    if(contact.length <= 0 ){
        contactCrossBtn.classList.add("hidden");
    }
    else{
        contactCrossBtn.classList.remove("hidden");
    }
        
    contactCrossBtn.addEventListener("click", ()=>{
        document.querySelector("#contact").value = "";
        contactCrossBtn.classList.add("hidden");
    })
}