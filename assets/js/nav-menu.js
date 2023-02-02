// NAVMENU ACTIVE STATUS

const projectDetailsMenus = document.querySelector("#productDetails").querySelectorAll("button");
// console.log(projectDetailsMenus);
const panels = document.querySelectorAll(".section-panel")

projectDetailsMenus.forEach(menu => {
    menu.addEventListener("click", ()=>{
        let menuTarget = menu.getAttribute("aria-controls");
        let menuId = menu.getAttribute("id");
        // clicked target id = navmenu item id 
        if(event.target.id === menuId){
            // for every item 
            projectDetailsMenus.forEach((item)=>{
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





// INCREMENT AND DECREMENT FUNCTIONALITY FOR PRODUCT ORDER 

// selecting html element by id 
const decrement = document.querySelector('#minusQuantity');
const increment = document.querySelector('#plusQuantity');
const quantity = document.querySelector('#quantity');

// temporary variable initialize 
let tempQuantity = 1;

// increment function with click event
increment.addEventListener('click', ()=>{
    // when clicked at + sign then temporary quantity variable will increase 
    tempQuantity++;
    // if temporary quantity variable < 10 then add a zero before temporary Quantity otherwise no addition needed
    tempQuantity = (tempQuantity < 10) ? "0" + tempQuantity : tempQuantity;
    // console.log(tempQuantity);
    // print as quantity value inside html element 
    quantity.innerHTML = tempQuantity;
})


// decrement function with click event
decrement.addEventListener('click', ()=>{
    // if temporary quantity value < 1 then you can't decrement the value 
    if(tempQuantity > 1){
        // temporary quantity value decrease
        tempQuantity--;
        // if temporary quantity variable < 10 then add a zero before temporary Quantity otherwise no addition needed
        tempQuantity = (tempQuantity < 10) ? "0" + tempQuantity : tempQuantity;
        // print as quantity value inside html element 
        quantity.innerHTML = tempQuantity;
    }
})

// PRODUCT DETAILS IMAGE SELECTION FUNCTIONALITY 

// selecting html image element by id and classes 
// this one is the larger displayed image 
const mainImage = document.querySelector("#largeImg");
// these are the optional images
const optionalImages = document.querySelectorAll(".small-img");

// targeting every image from optionalImages array 
optionalImages.forEach(image =>{
    // added click event
    image.addEventListener('click', ()=>{
        // replace image src
        mainImage.src = image.src;        
    })
})


// ADD TO CART PROMPT MESSAGE 

// selecting html button element by id 
const addToCartBtn = document.querySelector('#addToCart');
const cartMessage = document.querySelector('#cartMessage');

addToCartBtn.addEventListener('click', (e)=>{

        cartMessage.classList.remove("hidden")
        setTimeout(function(){
            cartMessage.classList.add("hidden");
        },4000)
    })
