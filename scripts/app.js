const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")

btn.addEventListener("click", ()=>{
 search.classList.toggle("active")
 input.focus()
})
const currentPage = window.location.pathname;

// Get all the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Loop through each link
navLinks.forEach(link => {
  // If the href of the link matches the current URL, add the 'active' class
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});