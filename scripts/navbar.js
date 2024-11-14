window.onscroll = function() {
    var header = document.querySelector('#top-navbar');
    if (window.pageYOffset > 50) { 
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };


  const langBar = document.querySelector('.language-box');
  const dropdownBar = document.querySelector('.dropdown-content');
  
  langBar.addEventListener('click', () => {
    dropdownBar.classList.toggle('active');
    langBar.classList.toggle('active');
  });
  
  const burger = document.querySelector('#burger');
  const mobileHeader = document.querySelector('.mobile-header');
  const closeButton = document.querySelector('.mobile-header__close-btn');
  
  burger.addEventListener('click', () => {
    mobileHeader.classList.toggle('open');
  });
  
  // Function to close the sidebar
  const closeSidebar = () => {
    mobileHeader.classList.remove('open');
  };
  
  // Close sidebar when the close button is clicked
  closeButton.addEventListener('click', closeSidebar);
  
  // Close sidebar when clicking outside of it
  document.addEventListener('click', (event) => {
    // Check if the click happened outside the sidebar and burger button
    if (!mobileHeader.contains(event.target) && !burger.contains(event.target)) {
      closeSidebar();
    }
  });
  
