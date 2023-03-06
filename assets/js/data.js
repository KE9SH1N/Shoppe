fetch("https://ke9sh1n.github.io/Shoppe/products.json")
    .then(function(response){
        return response.json();
    })

    .then(function(products){
        let dataContainer = document.querySelector("#productData");

        let outcome = "";

        for(let product of products){
            outcome += `
                <div>
                    <div class="relative cursor-pointer ct-content">
                        <a href="product.html">
                            <img class="" src="${product.image}" alt="${product.image}">
                        </a>
                        <div class="overlay absolute bottom-0 left-0 right-0 bg-white bg-opacity-50 overflow-hidden w-full h-0 transition-all duration-500 ease-in rounded-b-lg">
                            <button type="submit" class="text-black font-bold absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center uppercase" id="addCartBtn">add to cart</button>
                        </div>
                    </div>
                    <div class=" mt-6">
                        <h3 class="text-sm md:text-xl capitalize"><a href="product.html">${product.title}</a></h3>
                        <p class="text-xs md:text-xl text-accent font-medium mt-4">$ <span>${product.price}</span></p>
                    </div>
                </div>
            `;
        }
        dataContainer.innerHTML = outcome;
    })