/* https://www.w3schools.com/w3css/w3css_slideshow.asp */

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("anbefaling");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

$(function () {
    $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({
        default_offset_pct: 0.7
    });
});

