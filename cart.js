const itemContainer = document.getElementById("itemContainer");
const prizeContainer = document.getElementById("prizeContainer");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function showCart() {
  itemContainer.innerHTML = "";
  prizeContainer.innerHTML = "";
  let totalPrize = 0;

  cart.forEach((product, index) => {
    let quantity = product.quantity || 1;

    let itemPrize = product.price * quantity;

    totalPrize += itemPrize;

    const itemBox = document.createElement("div");

    itemBox.classList.add("itemCard");

    itemBox.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

          <div class="itemDesc">
            <div class="itemThings">
              <h2>${product.name}</h2>
              <h4>${product.price}</h4>
            </div>

            <div class="quantity">
              <button class="minus">−</button>
              <p>${quantity}</p>
              <button class="plus">+</button>
            </div>
          </div>
            `;

    itemBox.querySelector(".plus").addEventListener("click", () => {
      cart[index].quantity = (cart[index].quantity || 1) + 1;
      saveCart();
      showCart();
    });

    itemBox.querySelector(".minus").addEventListener("click", () => {
      if ((cart[index].quantity || 1) > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1);
      }
      saveCart();
      showCart();
    });

    itemContainer.appendChild(itemBox);
  });

  const prizeTable = document.createElement("div");
  prizeTable.classList.add("prizeTable");

  const heading = `
     <div class="prizeTable">
          <div class="prizeHeading">
            <h2>Product</h2>
            <h2>Price</h2>
          </div>
  `;
  prizeTable.innerHTML = heading;

  cart.forEach((product) => {
    let quantity = product.quantity || 1;
    let row = document.createElement("div");
    row.classList.add("prizeRow");
    row.innerHTML = `
            <p>${product.name} x ${quantity}</p>
            <p>$${product.price * quantity}</p>
        `;
    prizeTable.appendChild(row);
  });

  prizeContainer.appendChild(prizeTable);

  const finalPrize = document.createElement("div");
  finalPrize.classList.add("finalPrize");
  finalPrize.innerHTML = `
      <div class="fTable">
            <h2>Total</h2>
            <h2>$${totalPrize}</h2>
          </div>

    <button id="placeOrder">Place Order</button>
  
  `;

  prizeContainer.appendChild(finalPrize);

  const btn = document.getElementById("placeOrder").addEventListener("click", () => {
      const users = JSON.parse(localStorage.getItem("users"));

      if (users) {
        alert("Order Place successfully");

        localStorage.removeItem("cart");

        window.location.reload()
        showCart();
      } else {
        alert("please login First");
        window.location.href = "signup.html";
      }
    });
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

showCart();
