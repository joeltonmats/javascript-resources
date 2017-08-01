
var main = function () {
    $('.nav li').click(function () {
        var category = $(this).attr('class');
        $('.thumbnail').removeClass('selected');

        if (category == 'nav-consumer') $('.consumer').addClass('selected');
        else if (category == 'nav-mobile') $('.mobile').addClass('selected');
        else if (category == 'nav-commerce') $('.commerce').addClass('selected');
        else if (category == 'nav-enterprise') $('.enterprise').addClass('selected');

        $('.nav li').removeClass('active');
        $(this).addClass('active');
    });
};

$(document).ready(main);