$(function() {

  $('.jsa-image').hover(function(){
    $('.jsa-project-description').fadeIn(800);
  }, function(){
    $('.jsa-project-description').hide();
  });

  $('.chess-image').hover(function(){
    $('.chess-project-description').fadeIn(800);
  }, function(){
    $('.chess-project-description').hide();
  });

  $('.museseek-image').hover(function(){
    $('.museseek-project-description').fadeIn(800);
  }, function(){
    $('.museseek-project-description').hide();
  });
});