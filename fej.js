function swipe(){
    nav.classList.toggle('shift');
    menu.classList.toggle('spin');
}

//Allocate Variables
var menu = document.querySelector('.menu'); 
var nav = document.querySelector('.nav-list');


menu.onclick = function(){swipe();};
 
