$(function() {

  $('.jsa-image').hover(function(){

    $('.chess-project-description').hide();
    $('jsa-project-description').hide();
    $('.museseek-project-description').hide();

    $('.jsa-project-description').fadeIn(800);
  }, function(){
    $('.jsa-project-description').hide();
  });

  $('.chess-image').hover(function(){

    $('.chess-project-description').hide();
    $('jsa-project-description').hide();
    $('.museseek-project-description').hide();

    $('.chess-project-description').fadeIn(800);
  }, function(){
    $('.chess-project-description').hide();
  });

  $('.museseek-image').hover(function(){

    $('.chess-project-description').hide();
    $('jsa-project-description').hide();
    $('.museseek-project-description').hide();

    $('.museseek-project-description').fadeIn(800);
  }, function(){
    $('.museseek-project-description').hide();
  });
});