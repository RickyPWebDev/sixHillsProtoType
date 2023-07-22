/* This code is temp, this is to display a message and scroll to the top */
function init() {
document.getElementById("panel").innerHTML = "We are working on the form please email sales@nepltd.co.uk. or ring 0115 986 9555";
}

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
