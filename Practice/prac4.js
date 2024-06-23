$(document).ready(function() {
    var slides = $('.slide');
    var currentIndex = 0;
    var slideDuration = 1000;
  
    // Show the first slide
    slides.eq(currentIndex).show();
  
    $('#nextBtn').click(function() {
      slides.eq(currentIndex).fadeOut(slideDuration, function() {
        currentIndex = (currentIndex + 1) % slides.length;
        slides.eq(currentIndex).fadeIn(slideDuration);
      });
    });
  
    $('#prevBtn').click(function() {
      slides.eq(currentIndex).fadeOut(slideDuration, function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slides.eq(currentIndex).fadeIn(slideDuration);
      });
    });
  
    $('#toggleBtn').click(function() {
      slides.eq(currentIndex).fadeToggle(slideDuration);
    });
  });
  