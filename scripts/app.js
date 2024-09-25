const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")
const languageBar = document.querySelector('.dropdown-item-selected')
const languageMenus = document.querySelector('.dropdown-content')

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

languageBar.addEventListener('click', ()=>{
  languageMenus.classList.toggle('active')
})

function selectLanguage(lang) {
  // Get all dropdown items and remove the selected class
  const allItems = document.querySelectorAll('.dropdown-item, .dropdown-item-selected');
  allItems.forEach(item => item.classList.remove('selected'));

  // Add the selected class to the chosen language
  const selectedItem = document.querySelector(`.dropdown-item[onclick="selectLanguage('${lang}')"]`) ||
                       document.querySelector('.dropdown-item-selected');
  selectedItem.classList.add('selected');

  // Change the text of the selected item in the dropdown
  const selectedDropdown = document.querySelector('.dropdown-item-selected span');
  const selectedLang = selectedItem.querySelector('span').innerText;
  selectedDropdown.innerText = selectedLang;
}

// Set default language (Russian) when the page loads
document.addEventListener('DOMContentLoaded', function() {
  selectLanguage('ru'); // Default language set to Russian
});