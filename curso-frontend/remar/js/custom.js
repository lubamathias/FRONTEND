$(document).ready(function() {
    $(".foreground-image").animate({opacity: 1}, 2000);
  });

  /* 
  * botão de menu para mobile
  */
  var menuButton = document.querySelector('.menu-button');
  var mobileMenu = document.querySelector('.mobile-menu');
  
  menuButton.addEventListener('click', function() {
    if (mobileMenu.style.display === 'none') {
      mobileMenu.style.display = 'block';
    } else {
      mobileMenu.style.display = 'none';
    }
  });

  /**/