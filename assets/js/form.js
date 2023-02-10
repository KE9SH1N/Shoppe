function inputValue(id){
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
