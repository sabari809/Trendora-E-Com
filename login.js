const form = document.getElementById("loginform")
const errMsg = document.getElementById("errorMsg")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const loginEmail = document.getElementById("loginEmail").value.trim()
    const loginpass = document.getElementById("loginPass").value.trim()
    
    const users = JSON.parse(localStorage.getItem("users")) || []

    const user = users.find(u => u.email === loginEmail && u.pass === loginpass)

    if(user){
        alert("Login Successful")
        window.location.href = "cart.html"
        errMsg.style.display = "none"
    } else {
        errMsg.textContent = "Invalid Email or Password"
        errMsg.style.display = "block"
    }
})
