function valueName(id){
    const firstName = id.querySelector("input").value;
    const crossIcon = id.querySelector("i");

    if(firstName.length <= 0){
            crossIcon.classList.add("hidden");
        }
    else{
        crossIcon.classList.remove("hidden")
    }

    crossIcon.addEventListener("click", ()=>{
        id.querySelector("input").value = "";
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