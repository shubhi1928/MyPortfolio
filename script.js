window.onscroll = function () { myFunction() };

var navigation = document.getElementById("myTopnav");
var sticky = navigation.offsetTop;


function myFunction() {
    if (window.pageYOffset >= sticky) {
        navigation.classList.add("sticky");
        navigation.classList.remove("responsive");

    } else {
        navigation.classList.remove("sticky");
    }
}

function mynav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        navigation.classList.add("responsive");
    } else {
         navigation.classList.remove("responsive");
    }

}
