const projectDetailsMenus = document.querySelector("#productDetails").querySelectorAll("button");
// console.log(projectDetailsMenus);

const panels = document.querySelectorAll(".section-panel");

projectDetailsMenus.forEach(menu => {
    menu.addEventListener("click", ()=>{
        let menuTarget = menu.getAttribute("aria-controls")

        panels.forEach(panel =>{
            let panelId = panel.getAttribute("id")
            if(menuTarget === panelId){
                panel.classList.remove("hidden")
            }
            else{
                panel.classList.add("hidden")
            }
        })
    })
})