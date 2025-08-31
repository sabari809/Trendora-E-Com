const params = new URLSearchParams(window.location.search);
const productId = params.get("id"); 
const category = params.get("category");

const productDetails = document.querySelector(".productDetails");

if (productId && category) {
  fetch(`./${category}.json`)
    .then((r) => r.json())
    .then((data) => {
      const product = data.find((p) => p.id == productId); 
      if (product) {
        productDetails.innerHTML = `
        <div class="pCon">
        <div class="product">
        <img src="${product.image}" alt="" height="300px" width="300px">
        <div class="productD">
        <h2>${product.name}</h2>
        <h4>$${product.price}</h4>
        <div class="sizes">
        <p>Select Size:</p>
        <div class="productSizes">
        <ul class="size-list">
        <li>30</li>
        <li>32</li>
        <li>34</li>
        <li>36</li>
        </ul>
        </div>
        </div>
        
        <div class="cardBtns">
        <button onclick="window.history.back()">Go Back</button>
        <button class="cartBtn">Add to Cart</button>
        </div>
        </div>
        </div>

             <h2>Related Products</h2>
             
            <div class="Listcards" id="RelatedProducts"></div>
        `

      const Indivi= document.querySelector(".cartBtn")
      
      Indivi.addEventListener("click",()=>{
          let cart = JSON.parse(localStorage.getItem("cart")) || []
          cart.push(product)
          localStorage.setItem("cart",JSON.stringify(cart))
      })
      
        
      const relatedCont = document.getElementById("RelatedProducts")
      const listProducts = data.filter(p=>p.id != productId).slice(0,5);

      listProducts.forEach((item)=>{
          const card = document.createElement("div");
          card.classList.add("productCard");
          card.innerHTML=`
               <div class="imageWrapper">
              <img src="${item.image}" alt="${item.name}">
              <button class="viewMoreBtn" data-id="${item.id}">View More</button>
            </div>
            <div class="ProductDes">
              <h4>${item.name}</h4>
              <p>Price: ₹${item.price}</p>
              <div class="sizes">
                <p>Select Size:</p>
                <ul class="size-list">
                  <li>30</li>
                  <li>32</li>
                  <li>34</li>
                  <li>36</li>
                </ul>
              </div>
            </div>
            <div class="addBtn">
              <div class="addToCart">
                <p>Ratings: <span>${item.rating} ⭐</span></p>
                <button class="cartBtn">Add to Cart</button>
              </div>
            </div>
          `
          relatedCont.appendChild(card)

      const btn = card.querySelector(".cartBtn");

      btn.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("Item added successfully", cart);
      });
    });

    const viewBtns = document.querySelectorAll(".viewMoreBtn");
    viewBtns.forEach((viewBtn) => {
      viewBtn.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        window.location.href = `product.html?id=${id}`;
      });
      })


      }
    });
}

