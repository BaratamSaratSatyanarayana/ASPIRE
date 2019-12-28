$('.launch').click(function(){
  $('#rocket_launch').css("margin-bottom", "1000px");
   $('.cloud_fill').css("animation","smoke_size .35s infinite");
  $('.rocket_shadow').css("animation","shadow_flare .35s infinite");
});

$('.reset').click(function(){
     $('#rocket_launch').css("margin-bottom", "0px");
    $('.cloud_fill').css("animation","none");
  $('.cloud_fill').css("transform","scale(0)");
  $('.rocket_shadow').css("animation","none");
});