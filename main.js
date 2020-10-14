var audio = document.querySelector("audio");

document.querySelector(".play").addEventListener("click", function () {

    audio.play();
});

document.querySelector(".pause").addEventListener("click", function () {

    audio.pause();
});

document.querySelector(".stop").addEventListener("click", function () {

    audio.load();
});

document.querySelector("input").addEventListener("change", function (e) {

    audio.volume = e.target.value;
});

var song1 = document.querySelector(".song1");
var song2 = document.querySelector(".song2");
var song3 = document.querySelector(".song3");

song1.addEventListener("click", function () {
    audio.src = "audio\\Hymn for the Weekend.mp3";
    audio.play();
})
song2.addEventListener("click", function () {
    audio.src = "audio\\Believer.mp3";
    audio.play();
})
song3.addEventListener("click", function () {
    audio.src = "audio\\Thunder.mp3";
    audio.play();
})