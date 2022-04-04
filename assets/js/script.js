let menuToggle = document.querySelector("#menu");
let sidebar = document.querySelector('.sidebar-wrap');

menuToggle.addEventListener("click" , function(){
    sidebar.classList.toggle("toggle-sidebar")
});