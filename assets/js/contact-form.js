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
    const firstName = document.querySelector("#lastName").value;
    const crossIcon = document.querySelector("#lName i");
    
    if(firstName.length <= 0){
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

function emailNameCross(){
    const firstName = document.querySelector("#email").value;
    const crossIcon = document.querySelector("#Email i");
    
    if(firstName.length <= 0){
        crossIcon.classList.add("hidden");
    }
    else(
        crossIcon.classList.remove("hidden")
    )

    crossIcon.addEventListener("click", ()=>{
        document.querySelector("#email").value = "";
        crossIcon.classList.add("hidden");
    })
        
}