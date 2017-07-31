main = function () {
    $('#top-text').keyup(function () {
        var topText = $('#top-text').val();
        $('.top-caption').text(topText);
    });

    $('#bottom-text').keyup(function () {
        var bottomText = $('#bottom-text').val();
        $('.bottom-caption').text(bottomText);
    });

    $('#image-url').keyup(function () {
        var imgContent = $('#image-url').val();

        if (imgContent && imgContent.trim().length > 0)
            $('.meme img').attr('src', imgContent.trim());
        else
            $('.meme img').attr('src', './img/dog.jpg');
    });

};

$(document).ready(main);