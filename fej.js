function swipe(){
    // nav.classList.toggle('shift');
    menu.classList.toggle('spin');
}

function closeout(){
    nav.style.display = "none";
}

//Allocate Variables
var menu = document.querySelector('.menu'); 
var nav = document.querySelector('.nav-list');
var item = document.querySelectorAll('.nav-list li a');  


menu.onclick = function(){swipe();};   

