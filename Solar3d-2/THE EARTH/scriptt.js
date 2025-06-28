const toggleBtn= document.querySelector('.toggle_btn');
const toggleBtnIcon= document.querySelector('.toggle_btn i');
const dropDownMenu= document.querySelector('.dropdown_menu');

toggleBtn.onclick= function(){
    dropDownMenu.classList.toggle('open')
    const isOpen=dropDownMenu.classList.contains('open')
    toggleBtnIcon.classList=isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 800);
}

function showPage() {
  document.getElementById("myDiv").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
          navbar.classList.add("hidden");
      } else {
          navbar.classList.remove("hidden");
      }
      lastScrollTop = scrollTop;
  });
});

