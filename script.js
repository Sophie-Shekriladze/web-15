document.getElementById('clickMe').addEventListener('click', function(){
   alert('Coming Soon')
})






let navigationElement = document.getElementById("navBar");
let burgerElement = document.getElementById("burgerBar");

burgerElement.addEventListener("click", function () {
    navigationElement.classList.toggle("activeNav"); 
});