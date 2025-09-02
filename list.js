const listCard = document.getElementById("Listcards");
const reset = document.getElementById("reset");

fetch("./men.json")
  .then((r) => r.json())
  .then((data) => {
    data.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("productCard");

      card.innerHTML = `
          <div class="imageWrapper">
            <img src="${product.image}" alt="${product.name}">
            <button class="viewMoreBtn" data-id="${product.id}">View More</button>
          </div>
          <div class="ProductDes">
            <h4>${product.name}</h4>
            <p>Price: ₹${product.price}</p>
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
              <p>Ratings: <span>${product.rating} ⭐</span></p>
              <button class="cartBtn">Add to Cart</button>
            </div>
          </div>
      `;

      listCard.appendChild(card);

      const btn = card.querySelector(".cartBtn");

      btn.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
          cart.push(product);
          localStorage.setItem("cart", JSON.stringify(cart));
          console.log("Item added successfully", cart);
          
          alert("Product Added")
        } 
      );
    });

    const viewBtns = document.querySelectorAll(".viewMoreBtn");
    viewBtns.forEach((viewBtn) => {
      viewBtn.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        const category = "men"
        window.location.href = `product.html?category=${category}&id=${id}`;
      });
    });
  })
  .catch((err) => {
    console.error("Fetchint the product has been failed try again", err);
  });

