$(document).ready(function() {
    var windowWidth = $(document).width();
    var santa = $('.santa');
    santa_right_pos = windowWidth + santa.width();
    santa.right = santa_right_pos;
    function movesanta(){
        santa.animate({right : windowWidth +  santa.width()},15000, function(){
            santa.css("right","-500px");
            setTimeout(function(){
                movesanta();
            },10000);
        });
    }
    movesanta();
});
