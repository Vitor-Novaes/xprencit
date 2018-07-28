document.addEventListener('page:change', function() {
  $(window).on('load',function(){
    $('.pre-loader').delay(400).fadeOut(500);
  });

});
