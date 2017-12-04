$(document).ready(function() {
    $('.thumbnails').mouseenter(function() {
       $(this).addClass('thumbnail-hover')
});   
    $('.thumbnails').mouseleave(function() {
       $(this).removeClass('thumbnail-hover');
    });
    
    $('ul li').click(function() {
     $(this).addClass('active').siblings('li').removeClass('active');
    });
});
