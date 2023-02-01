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


const decrement = document.querySelector('#minusQuantity');
const increment = document.querySelector('#plusQuantity');
const quantity = document.querySelector('#quantity');

let tempQuantity = 1;

increment.addEventListener('click', ()=>{
    tempQuantity++;
    tempQuantity = (tempQuantity < 10) ? "0" + tempQuantity : tempQuantity;
    console.log(tempQuantity);
    quantity.innerHTML = tempQuantity;
})

decrement.addEventListener('click', ()=>{
    if(tempQuantity > 1){
        tempQuantity--;
        tempQuantity = (tempQuantity < 10) ? "0" + tempQuantity : tempQuantity;
        quantity.innerHTML = tempQuantity;
    }
})


const mainImage = document.querySelector("#largeImg");
const optionalImages = document.querySelectorAll(".small-img");

optionalImages.forEach(image =>{
    image.addEventListener('click', ()=>{
        mainImage.src = image.src;        
    })
})
