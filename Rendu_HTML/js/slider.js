document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector('.slider');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  function showSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    const translation = -currentIndex * 100 + '%';
    slider.style.transform = 'translateX(' + translation + ')';
  }

  function startAutoScroll() {
    setInterval(function () {
      showSlide(currentIndex + 1);
    }, 5000); 
  }

  prevBtn.addEventListener('click', function () {
    showSlide(currentIndex - 1);
  });

  nextBtn.addEventListener('click', function () {
    showSlide(currentIndex + 1);
  });

  startAutoScroll();
});