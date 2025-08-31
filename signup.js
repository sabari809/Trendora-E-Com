const form = document.getElementById("singupForm")
const errMSg = document.getElementById("errorMsg")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const pass = document.getElementById("pass").value.trim()
    const confirmPass = document.getElementById("Confirmpass").value.trim()

    if(!name || !email || !pass || !confirmPass){
        errMSg.textContent = "Please Fill all the form Field"
        errMSg.style.color="red"
        errMSg.style.display = "block"
    } else if (pass.length <6){
        errMSg.textContent = "Please Enter Storng pass"
        errMSg.style.color="red"
        errMSg.style.display = "block"
    } else if (pass !== confirmPass){
        errMSg.textContent = "pass and Confirm pass shoudl be same"
        errMSg.style.color="red"
        errMSg.style.display = "block"
    } else{
        errMSg.style.display = "none"
        const user = {
            name : name,
            email : email,
            pass : pass
        }
        
        let users = JSON.parse(localStorage.getItem("users")) || []
        users.push(user)
        
        localStorage.setItem("users",JSON.stringify(users))
        window.location.href = "login.html"  
        form.reset()
    }
})