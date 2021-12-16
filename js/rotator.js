var config = {
    speed: 4000,
    rotateid: '#rotator'
};

$(document).ready(function () {

    $(config.rotateid).each(function () {
        if ($(this).children().length > 1) {
            BeginSlideshow();
        }
    });
});

function BeginSlideshow() {
    $(config.rotateid + ' li').css({ opacity: 0.0 });
    $( config.rotateid + ' li:first').css({ opacity: 1.0 });

    if ($(config.rotateid + ' li').length > 0) {
        setInterval('RotateSlides()', config.speed);
    }
}
function RotateSlides() {
    var current = ($(config.rotateid + ' li.show') ? $(config.rotateid + ' li.show') : $(config.rotateid + ' li:first'));
    var next = ((current.next().length) ? current.next() : $(config.rotateid + ' li:first'));

    next.css({ opacity: 0.0 })
        .addClass('show')
        .animate({ opacity: 1.0 }, 1000)
        .removeClass('hide');

    current.animate({ opacity: 0.0 }, 1000, function () {
        $(this).addClass('hide');
    }).removeClass('show');
    var index = $('ul' + config.rotateid + ' li.show').index();
}






