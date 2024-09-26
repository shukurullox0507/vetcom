window.onscroll = function() {
    var header = document.querySelector('#top-navbar');
    if (window.pageYOffset > 50) { 
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };


const langBar = document.querySelector('.language-box')
const dropdownBar = document.querySelector('.dropdown-content')

langBar.addEventListener('click',()=>{
  dropdownBar.classList.toggle('active')
  langBar.classList.toggle('active')
})