const handburger = document.getElementById("handburger")
const logoSession = document.getElementById("logo-session")
const  closeBtn = document.getElementById("closeBtn")
const mainPage = document.querySelector(".logo h2")

mainPage.addEventListener("click",()=>{
    window.location.href='index.html'
})

const carticon = document.querySelector(".cart")
carticon.addEventListener("click",()=>{
    window.location.href = "cart.html"
})

handburger.addEventListener("click",()=>{
    logoSession.classList.add("active")
    handburger.style.display = "none"
    closeBtn.style.display = "block"
})

closeBtn.addEventListener("click",()=>{
    logoSession.classList.remove("active")
    closeBtn.style.display = "none"
    handburger.style.display = "block"
})