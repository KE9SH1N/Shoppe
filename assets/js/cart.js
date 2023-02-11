// function expandShipping(id){
//     upSide = id.querySelector(".fa-angle-up");
//     downSide = id.querySelector(".fa-angle-down");
//     // console.log(downSide);
//     upSide.classList.toggle("hidden");
//     downSide.classList.toggle("hidden");
// }


// DROPDOWN TOGGLE
// function toggleCalculatShipping(id) {
//       if (id.classList.contains("opacity-0")) {
//         id.classList.remove("opacity-0","h-0","pointer-events-none", "invisible", "translate-y-0");
//         id.classList.add("opacity-100", "h-full", "visible", "translate-y-full");
//       } else {
//         id.classList.remove("opacity-100", "h-full", "visible", "translate-y-full");
//         id.classList.add("opacity-0","h-0", "invisible", "translate-y-0");
//       }
//     }



//     // HIGHT SLIDE
// function hightSlide(id, hSize) {
//      if (id.classList.contains("h-0")) {
//           id.classList.remove("h-0", "opacity-0", "invisible");
//           id.classList.add(`${hSize}`, "opacity-100", "visible");
//      } else {
//           id.classList.add("h-0", "opacity-0", "invisible");
//           id.classList.remove(`${hSize}`, "opacity-100", "visible");
//      }
// }


// // // DROPDOWN TOGGLE
// function toggleCalculatShipping(btn) {
//      const calculatShippingForm = document.getElementById("calculatShippingForm");

//      if (btn.classList.contains("fa-angle-down")) {
//           hightSlide(calculatShippingForm, 'h-full');
//           btn.classList.remove("fa-angle-down");
//           btn.classList.add("fa-angle-up");
//      }else{
//           hightSlide(calculatShippingForm, 'h-full');
//           btn.classList.remove("fa-angle-up");
//           btn.classList.add("fa-angle-down");
//      }
// }



// INCREMENT AND DECREMENT FUNCTIONALITY FOR PRODUCT ORDER 

// selecting html element by id 
const decrement = document.getElementById('minusQuantity').id;

const increment = document.getElementById('plusQuantity').id;
// console.log(increment);
const quantity = document.getElementById('productDetailsQuantity').querySelector("span");
// console.log(quantity);
// temporary variable initialize 
let tempQuantity = 1;

document.addEventListener("click", (e)=>{
    // console.log(e.target.id);
    if(e.target.id == increment){
        tempQuantity++;
    // if temporary quantity variable < 10 then add a zero before temporary Quantity otherwise no addition needed
        tempQuantity = (tempQuantity < 10) ? "0" + tempQuantity : tempQuantity;
        // console.log(tempQuantity);
        // print as quantity value inside html element 
        quantity.innerHTML = tempQuantity;
        // console.log(tempQuantity);
    }
    else if(e.target.id == decrement && tempQuantity > 1){
        // temporary quantity value decrease
        tempQuantity--;
        // if temporary quantity variable < 10 then add a zero before temporary Quantity otherwise no addition needed
        tempQuantity = (tempQuantity < 10) ? "0" + tempQuantity : tempQuantity;
        // print as quantity value inside html element 
        quantity.innerHTML = tempQuantity;
    }
})