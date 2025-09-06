const cardD = document.querySelector(".cardDetails");
const completePay = document.getElementById("completePayment");

const ogHtml = cardD.innerHTML;

document.getElementById("card").addEventListener("click", () => {
    cardD.innerHTML = ogHtml; 
    cardD.classList.remove("active");
    completePay.textContent = "Proceed to Pay";
});

document.getElementById("gpay").addEventListener("click", () => {
    cardD.innerHTML = `<div style="text-align:center;">
                          <img src="https://pvccardprinting.in/wp-content/uploads/2023/12/gpay-qr-code.webp" 
                               style="min-height:500px; max-width:400px; border-radius:10px;" />
                       </div>`;
    completePay.textContent = "Proceed with Google Pay";
});

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show";

  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
    localStorage.removeItem("cart");
    window.location.href="index.html"
  }, 3000);
}

document.getElementById("completePayment").addEventListener("click", () => {
  showToast("✅ Order Placed Successfully!");
});
