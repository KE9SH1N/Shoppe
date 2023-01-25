const rangeInput = document.querySelectorAll(".range-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 100;

document.getElementById('minPriceRange').innerHTML ="$" + rangeInput[0].value;
document.getElementById('maxPriceRange').innerHTML ="$" + rangeInput[1].value;

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            range.style.left =((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";

            document.getElementById('minPriceRange').innerHTML ="$" + minVal;
            document.getElementById('maxPriceRange').innerHTML ="$" + maxVal;
        }
    });
});

