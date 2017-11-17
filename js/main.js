/**
 * Created by Elena on 26.10.2017.
 */

window.onload = function () {

    //Слайдер

    showSlides();
    overlay();

    //Слайдер новостей

    showNews(newsIndex);


};

window.onresize = overlay;

//Слайдер

var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

//Наложение фона на слайдер

function overlay() {
    var imgHeight;
    imgHeight = document.getElementById("mySlides").offsetHeight;
    var background = document.getElementById("sliderBackground");
    background.style.position = "absolute";
    background.style.top = "0px";
    background.style.height = imgHeight + "px";
}

//Слайдер новостей

var newsIndex = 1;

function currentNews(n) {
    showNews(newsIndex = n);
}

function showNews(n) {
    var i;
    var news = document.getElementsByClassName("news");
    var bullets = document.getElementsByClassName("bullet");
    if (n > news.length) {newsIndex = 1}
    if (n < 1) {newsIndex = news.length}
    for (i = 0; i < news.length; i++) {
        news[i].style.display = "none";
    }
    for (i = 0; i < bullets.length; i++) {
        bullets[i].className = bullets[i].className.replace(" active", "");
    }
    news[newsIndex-1].style.display = "block";
    bullets[newsIndex-1].className += " active";
}

$(document).ready(function () {

    //Анимация чисел

    $("#facts").waypoint(function(){
        $({blurRadius: 5}).animate({blurRadius: 0}, {
            duration: 1000,
            easing: 'swing',
            step: function() {
                $(".facts-item h1 span").css({
                    "-webkit-filter": "blur("+this.blurRadius+"px)",
                    "filter": "blur("+this.blurRadius+"px)"
                });
            }
        });
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
        $(".facts-item h1 span").each(function() {
            var tcount = $(this).data("count");
            $(this).animateNumber({ number: tcount,
                    easing: 'easeInQuad',
                    "font-size": "40px",
                    numberStep: comma_separator_number_step},
                1000);
        });
        this.destroy();
    }, {
        offset: '90%'
    });

});




