window.onscroll=function(){myFunction()}

var nav=document.getElementById("menu")

var stick=nav.offsetTop;

function myFunction(){
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}