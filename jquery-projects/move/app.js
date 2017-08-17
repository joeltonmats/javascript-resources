var cities = [
    "Manaus",
    "Campinas"
];

var main = function () {
    $("#search").autocomplete({
        source: cities
    });
}

$(document).ready(main);