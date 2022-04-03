let menuToggle = document.querySelector("#menu");
let sidebar = document.querySelector('.sidebar-wrap');

menuToggle.addEventListener("click" , function(){
    if (menuToggle.firstElementChild.classList.contains("fa-bars")){
        menuToggle.firstElementChild.classList.replace("fa-bars" , "fa-times");
    }
    else{
        menuToggle.firstElementChild.classList.replace("fa-times" , "fa-bars");
    };
    sidebar.classList.toggle("toggle-sidebar")
});
