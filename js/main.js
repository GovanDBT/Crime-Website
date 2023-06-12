document.getElementById('about').addEventListener('click', function() {
    document.querySelector(".modal-about").style.display = "flex";
});

document.querySelector(".close-about").addEventListener("click", function () {
  document.querySelector(".modal-about").style.display = "none";
});

document.getElementById('contact').addEventListener('click', function() {
    document.querySelector(".modal-contact").style.display = "flex";
});

document.querySelector(".close-contact").addEventListener("click", function () {
  document.querySelector(".modal-contact").style.display = "none";
});

document.getElementById("stats").addEventListener("click", function () {
  document.querySelector(".modal-stats").style.display = "flex";
});

document.querySelector(".close-stats").addEventListener("click", function () {
  document.querySelector(".modal-stats").style.display = "none";
});

document.getElementById('profile').addEventListener('click', function() {
    document.querySelector(".modal-profile").style.display = "flex";
});

document.querySelector(".close-profile").addEventListener("click", function () {
  document.querySelector(".modal-profile").style.display = "none";
});

var login_link = document.querySelector('.log-btn');
var signup_link = document.querySelector('.signup-btn');

var login_form = document.querySelector('.login-form');
var signup_form = document.querySelector('.signup-form');

signup_link.addEventListener('click', login_hide);
login_link.addEventListener('click', signup_hide);

function login_hide(){
  login_form.style.display = "none";
  signup_form.style.display = "block";
  signup_link.style.background = "#c11717";
  login_link.style.background = "#436880";
}

function signup_hide() {
  signup_form.style.display = "none";
  login_form.style.display = "block";
  login_link.style.background = "#c11717";
  signup_link.style.background = "#436880";
}

// function for defining the drop down navbar menu
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
        this.classList.toggle("collapsible-expanded");
    })
);