$(document).ready(function() {
  $(window).scroll(function() {

    // scroll indicator

    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var windowScroll = $(window).scrollTop();

    var scrolled = (windowScroll/(documentHeight - windowHeight) * 100);

    $('.scroll').css('width', (scrolled + '%'));

    if($(window).width() > 450) {
      parallax();
    } else {
      $('#bg').css('background-position','top left 42%');  
    }
    // active link indicator

    $('.scr').each(function() {
      if (($(this.hash).offset().top - 100) <= windowScroll) {
        $(this).addClass('active');
        $(this).parent().siblings().children().removeClass('active');
        if ($('#about').offset().top >= windowScroll) {
          $(this).removeClass('active');
        }        
      }
    })
  })

// smooth scrolling

  $('.scr').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 800);
  })  
}) 

// parallax

function parallax() {
  const scroll = $(window).scrollTop();
  $('#birds').css('right', scroll + 'px');
  $('#bg').css({'background-position': 'center ' +(scroll * 0.8)+ 'px', 
    'filter': 'blur(' +(scroll/150)+ 'px'
  });
}