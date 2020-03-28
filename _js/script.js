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

let colors = ["#F8C364", "#ef7858", "#9cbdbe", "#2B7377"]
let currentColor = 0
let lis = document.querySelectorAll(".text h2")

function changeColor() {
    --currentColor
    if (currentColor < 0) currentColor = colors.length - 1
    for (let i = 0; i < lis.length; i++) {
        lis[i].style.borderLeftColor = colors[(currentColor + i) % colors.length]
    }
}
setInterval(changeColor, 1000)

const ratio = .2
const options = {
    root: null,
    rootMargin: '0px',
    threshold : ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
    
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function(r) {
    observer.observe(r)
})