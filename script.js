function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

const toggler = document.querySelector('#toggler');
toggler.addEventListener('change', switchTheme, false);

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}

var colors = ["#F8C364", "#ef7858", "#9cbdbe", "#2B7377"]
var currentColor = 0
var lis = document.querySelectorAll(".text h2")

function changeColor() {
    --currentColor
    if (currentColor < 0) currentColor = colors.length - 1
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.borderLeftColor = colors[(currentColor + i) % colors.length]
    }
}
setInterval(changeColor, 1000)