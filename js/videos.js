$(document).ready(function() {
    $('.card').mouseenter(function() {
        $(this).addClass('pulse');
    });
    
    $('.card').mouseleave(function() {
        $(this).removeClass('pulse');
    });
});