const projectDetailsMenus = document.querySelector("#productDetails").querySelectorAll("button");
// console.log(projectDetailsMenus);

const panels = document.querySelectorAll(".section-panel")

projectDetailsMenus.forEach(menu => {
    menu.addEventListener("click", ()=>{
        let menuTarget = menu.getAttribute("aria-controls");
        let menuId = menu.getAttribute("id");
        // console.log(menuId);
        // console.log(event.target.id);
        if(event.target.id === menuId){
            projectDetailsMenus.forEach((item)=>{
                item.classList.remove("ct-active");
            })
            menu.classList.add("ct-active");
        }
        else{
        }
        panels.forEach(panel =>{
            let panelId = panel.getAttribute("id");
            if(menuTarget === panelId){
                panel.classList.remove("hidden");
            }
            else{
                panel.classList.add("hidden");
            }
        })
    })
})

// projectDetailsMenus.forEach(menu =>{
//     menu.addEventListener("click", ()=>{
//         let menuNav = menu.getAttribute("id");
//         console.log(menu);
//         if(menuNav === menu.getAttribute("id")){
//             menu.classList.add("ct-active");
//         }
//         else{
//             menu.classList.remove("ct-active");
//         }
//     })
// })