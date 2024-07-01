
// Set automatic year to footer.
document.addEventListener("DOMContentLoaded", (e)=>{
    e.preventDefault();
    const yearTxt = document.getElementById('year');
    const currentYr = new Date().getFullYear();

    yearTxt.innerHTML = currentYr; // set year.

})