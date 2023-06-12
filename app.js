// Your solution goes here
// Hints:
// 1. Assign a id to the tags you want to select
// 2. Use appropriate methods and properties to complete the specified task.
// Example: 
// (style) property to change style
// (classList) property to modify class
// (getAttribute) and (setAttribute) to modify attributes


/**
 * Custom Portfolio info DOM Manipulation goes here
 * 
 */

document.getElementById('iits-cr-msg').innerHTML = "Md Saikat";
document.getElementById('iits-name').innerHTML = "Md Saikat";
document.getElementById('iits-prof').innerHTML = "Web Designer and Developer";
document.getElementById('iits-edu').innerHTML = "Javascript";
document.getElementById('iits-study').innerHTML = "Bachelor of Computer Science and Technology";
document.getElementById('iits-school').innerHTML = "International University of Business Agriculture and Technology";
document.getElementById('iits-passion').innerHTML = "Web application development and Security";
document.getElementById('iits-numYears').innerHTML = "2 years ";
document.getElementById('iits-hobby').innerHTML = "playing video games";
document.getElementById('iits-crc').innerHTML = "Openness";
document.getElementById('iits-ability').innerHTML = "learn new things. ";
document.getElementById('iits-goal').innerHTML = "become a DevSecOps";


/**
 * Custom Portfolio Social Media and Image DOM Manipulation goes here
 * 
 */

const facebookURL = document.getElementById('custom-fb-handler');
facebookURL.setAttribute('href', 'https://facebook.com/dark.htmlii');

const mailto = document.getElementById('custom-mail-handler');
mailto.setAttribute('href', 'mailto:0xh7ml.py@gmail.com');

const gitURL = document.getElementById('custom-github-handler');
gitURL.setAttribute('href', 'https://github.com/0xh7ml');

const imageURL = document.getElementById('iits-img');
imageURL.setAttribute('src', '/img/img3.jpeg');

/**
 * Custom Background color using DOM Manipulation Goes here
 * 
 */

const docsBackground = document.getElementById('iits-bg');
docsBackground.style.color = "#fff";
docsBackground.classList.remove('bg-danger');
docsBackground.classList.add('custom-bg');

// button customization goes here
const cvButton = document.getElementById('iits-btn');
cvButton.classList.remove('btn-danger');
cvButton.classList.add('custom-button');


// text color customizatin goes here
const customTextColor = document.getElementsByTagName('span');
console.log(customTextColor);
for (let i = 1; i < customTextColor.length; i++) {
    customTextColor[i].classList.remove('text-danger');
    customTextColor[i].style.color = '#F37335';
}
