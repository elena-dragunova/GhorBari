window.onload = function(){

	// Слайдер Values
	showValues(valuesIndex);

    //Слайдер Customers
    showReviews(reviewIndex);
}

//Слайдер Values

var valuesIndex = 1;

function currentValue(n) {
    showValues(valuesIndex = n);
}

function showValues(n) {
    var i;
    var values = document.getElementsByClassName("values");
    var bullets = document.getElementsByClassName("bullet");
    if (n > values.length) {valuesIndex = 1}
    if (n < 1) {valuesIndex = values.length}
    for (i = 0; i < values.length; i++) {
        values[i].style.display = "none";
    }
    for (i = 0; i < bullets.length; i++) {
        bullets[i].className = bullets[i].className.replace(" active", "");
    }
    values[valuesIndex-1].style.display = "flex";
    bullets[valuesIndex-1].className += " active";
}

//Слайдер Customers

var reviewIndex = 1;

function currentReview(n) {
    showReviews(reviewIndex = n);
}

function showReviews(n) {
    var i;
    var reviews = document.getElementsByClassName("reviews");
    var bullets = document.getElementsByClassName("c-bullet");
    if (n > reviews.length) {reviewIndex = 1}
    if (n < 1) {reviewIndex = reviews.length}
    for (i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none";
    }
    for (i = 0; i < bullets.length; i++) {
        bullets[i].className = bullets[i].className.replace(" active", "");
    }
    reviews[reviewIndex-1].style.display = "block";
    bullets[reviewIndex-1].className += " active";
}

//Переключение карты с кнопок

var mapsArray = [
    "img/map1.jpg",
    "img/map2.jpg",
    "img/map3.jpg",
    "img/map4.jpg"
];

function showMap(n) {
    document.getElementById("map").setAttribute("src", mapsArray[n]);
    var buttons = document.getElementsByClassName("btn-map");
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains('active')) {
             buttons[i].classList.remove('active');
         }
    }
    event.target.classList.add('active');
};