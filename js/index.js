$(document).ready(function() {
  $('#human_3').css({
    width: "75px",
    height: "75px"
  }, 10);
  $('#phrase_3').css({
    display: "block"
  });
  $('#author_3').css({
    display: "block"
  });
  $('.nav_but').on('click', function(){
    var target = $(this).attr('href');
    $('.full_page').stop().animate({
        scrollTop: $(target).offset().top
      }, 1000);
  });
  $('.play_icon').on('click', function(){
    $('html, body, full_page').stop().animate({
      scrollTop: ($('#video').offset().top + $('#video').height()) / 2
    }, 100);
    $('.overlay').fadeIn(297,	function(){
      $('.modal')
      .css('display', 'block')
      .animate({opacity: 1}, 198);
      $('#youtube_video').attr('src', 'https://www.youtube.com/embed/KvUgaHTNit4')
    });
    $('.modal_close, .overlay').click( function(){
      $('.modal').animate({opacity: 0}, 198, function(){
        $(this).css('display', 'none');
        $('.overlay').fadeOut(297);
        $('#youtube_video').attr('src', '')
      });
    });
  });
  $('.humans img').on('click', function(){
    var $id = $(this).attr('id').replace(/[^0-9]/g,"");
    $('.humans img').not($(this)).each(function () {
      $(this).animate({
        width: "50px",
        height: "50px"
      }, 300);
    });
    $(this).animate({
      width: "75px",
      height: "75px"
    }, 300);
    $('.quote_text').each(function () {
      $(this).css({
        display: "none"
      })
    });
    $('.author_name').each(function () {
      $(this).css({
        display: "none"
      })
    });
    $('#phrase_'+$id).css({
      display: "block"
    });
    $('#author_'+$id).css({
      display: "block"
    });
  });
  $('.nav_open').on('click', function(){
    console.log("ya nazhat");
    $('#navbar').toggle("slide", {
             direction: "right"
         }, 1500);
  });
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});


/**

$(function() {
 let header = $('.header');

 $(window).scroll(function() {
   if($(this).scrollTop() > 1) {
    header.addClass('header_fixed');
   } else {
    header.removeClass('header_fixed');
   }
 });
});

*/
