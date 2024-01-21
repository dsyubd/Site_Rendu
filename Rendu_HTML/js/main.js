

document.addEventListener('DOMContentLoaded', function () {
  var menuButton = document.querySelector('.menu-button');
  var menuContent = document.querySelector('.menu-content');

  menuButton.addEventListener('click', function () {
    if (menuContent.style.display === 'block') {
      menuContent.style.display = 'none';
      startSliderAutoplay(); 
    } else {
      menuContent.style.display = 'block';
      stopSliderAutoplay();
    }
  });
});



