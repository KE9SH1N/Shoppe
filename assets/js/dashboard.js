const accountDashboard = document.querySelector("#dashboardDetails").querySelectorAll("button");
// console.log(accountDashboard);
const panels = document.querySelectorAll(".section-panel");

accountDashboard.forEach(menu => {
    menu.addEventListener("click", ()=>{
        let menuTarget = menu.getAttribute("aria-controls");
        let menuId = menu.getAttribute("id"); 
        if(menuId){
            // for every item 
            accountDashboard.forEach((item)=>{
                // reset active class 
                item.classList.remove("ct-active");
            })
            // added active class when we clicked on any menu item 
            menu.classList.add("ct-active");
        }
        else{
        }
        panels.forEach(panel =>{
            let panelId = panel.getAttribute("id");
            // showing element id = nav menu item id 
            if(menuTarget === panelId){
                // remove class 'hidden' to show element 
                panel.classList.remove("hidden");
            }
            else{
                // added 'hidden' class to other element to hide and create space for showing element
                panel.classList.add("hidden");
            }
        })
    })
})