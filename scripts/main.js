/**
 * Created by Admin on 02.02.2019.
 */

//функция выпадающего меню
function toggleClass() {
    var nav = document.getElementById("nav");
    var arr = ["65px", "-100%"];
    if (nav.style.top != arr[0]) {
        nav.style.top = arr[0];
    } else {
        nav.style.top = arr[1];
    }

}

document.onload = function () {
    var audio = document.getElementById("mySoundClip");
    audio.volume = 0.2;
    audio.play();
}



