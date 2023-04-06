var lastScrollTop = 0;
var navbar = document.getElementById("idNav");

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop) {
    navbar.style.transition = "400ms";
    navbar.style.transform = "translateY(-100%)";
    navbar.style.backgroundColor = "var(--primary)"; 
   } else if (st < lastScrollTop) {
    navbar.style.transition = "500ms";
    navbar.style.transform = "translateY(0)"
    navbar.style.display = "flex";
    navbar.style.backgroundColor = "var(--primary)"; 
   } // else was horizontal scroll
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


const introducing = document.getElementById("idIntroducing");
const kommunikasjon = document.getElementById("idKommunikasjon");

function scrollIntroducing(){
   introducing.scrollIntoView({behavior: "smooth"});
}
function scrollKommunikasjon(){
   kommunikasjon.scrollIntoView({behavior: "smooth"});
}
function scrollContact(){
 contactElement.scrollIntoView({behavior: "smooth"});
}