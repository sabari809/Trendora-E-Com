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
    document.querySelector(".rightNavbar2").style.display = "block"
    logoSession.classList.add("active")
    handburger.style.display = "none"
    closeBtn.style.display = "block"
})

closeBtn.addEventListener("click",()=>{
    logoSession.classList.remove("active")
    closeBtn.style.display = "none"
    handburger.style.display = "block"
})




document.addEventListener("DOMContentLoaded", () => {
const searchInputMain = document.getElementById("searchInputMain");
const suggestionsMain = document.getElementById("suggestionsMain");

    const jsonFiles = ["./men.json", "./women.json", "./kids.json"];
    let allProducts = [];

    Promise.all(jsonFiles.map(url => fetch(url).then(res => res.json())))
        .then(results => allProducts = results.flat())
        .catch(err => console.error(err));

    function debounce(fun, delay) {
        let timeout;
        return function(...args){
            clearTimeout(timeout);
            timeout = setTimeout(() => fun.apply(this, args), delay);
        }
    }


function searchProducts(inputvalue, suggestionsEl) {
    const query = inputvalue.value.trim().toLowerCase();
    console.log("Query:", query);
    console.log("All products:", allProducts);

    if (!suggestionsEl) return;
    suggestionsEl.innerHTML = "";
    if(query.length === 0) return;

    const matches = allProducts.filter(item => item.name.toLowerCase().includes(query));
    console.log("Matches:", matches);

    matches.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("matchinglist")
        div.innerHTML =  `${item.name} <img src=${item.image} height=50px weight=50px/>`;
        suggestionsEl.appendChild(div);
        div.addEventListener("click", () => {
            window.location.href = `product.html?id=${item.id}&category=${item.category}`;
            inputEl.value = item.name;
            suggestionsEl.innerHTML = "";
        });
    });
}



searchInputMain.addEventListener("input", debounce(() => searchProducts(searchInputMain, suggestionsMain), 300));

});
