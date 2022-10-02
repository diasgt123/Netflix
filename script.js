setTimeout(() => {
    const mypic = document.getElementById('mypic');
    mypic.style.display = 'none';
}, 3000);
$(function () {
    $(document).scroll(function () {
      var $nav = $(".heading-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  window.addEventListener('DOMContentLoaded', (event) => {
    jQuery('div#main-nav.navbar').css("background-color", "rgba(255, 255, 255, 0.2)");
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 0) {
            jQuery('div#main-nav.navbar').css("background-color", "#000");              
        } else {
            jQuery('div#main-nav.navbar').css("background-color", "rgba(255, 255, 255, 0.2)");
        }
    });
}); 
