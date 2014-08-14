//  ----------------------------------------------------------
//  HE Zahran JS functions v1.0
//  ----------------------------------------------------------
//  Copyright (c) 2014, HEZahran.com. All rights reserved.
//  Coded and Authored with all the love in the world.
//  Coder: Hashem Zahran @antikano || @hezahran
//  ----------------------------------------------------------

//  ----------------------------------------------------------
//  Replace all SVG images with inline SVG
//  ----------------------------------------------------------
$('img.svg').each(function(){
  var $img = $(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgID !== 'undefined') {
      $svg = $svg.attr('id', imgID);
    }
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    $img.replaceWith($svg);
  }, 'xml');
});

//  ----------------------------------------------------------
//  parallax background
//  ----------------------------------------------------------
$.stellar({
  horizontalScrolling: false
});

//  ----------------------------------------------------------
//  smooth scolling 
//  ----------------------------------------------------------
$('#navigation').singlePageNav();
$('.more').singlePageNav();

//  ----------------------------------------------------------
//  sticky navbar
//  ----------------------------------------------------------
$(".navbar").sticky({topSpacing:0});