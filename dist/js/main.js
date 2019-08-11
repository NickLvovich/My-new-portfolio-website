// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        
        // Set Menu State
        showMenu = true;
    }else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        
        // Set Menu State
        showMenu = false
    }
}

// loader
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

// particles

let particles= document.querySelector("#particles");

function main(){
    let np = document.documentElement.clientWidth / 27;
    particles.innerHTML = "";
    for (let i = 0; i < np; i++) {
        let w = document.documentElement.clientWidth;
        let h = document.documentElement.clientHeight;
        let rndw = Math.floor(Math.random() * w ) + 1;
        let rndh = Math.floor(Math.random() * h ) + 1;
        let widthpt = Math.floor(Math.random() * 8) + 3;
        let opty = Math.floor(Math.random() * 5) + 2;
        let anima = Math.floor(Math.random() * 12) + 8;

        let div = document.createElement("div");
        div.classList.add("particle");
        div.style.marginLeft = rndw+"px";
        div.style.marginTop = rndh+"px";
        div.style.width = widthpt+"px";
        div.style.height = widthpt+"px";
        div.style.background = "white";
        div.style.opacity = opty;
        div.style.animation = "move "+anima+"s ease-in infinite ";
        particles.appendChild(div);
    }
}
window.addEventListener("resize", main);
window.addEventListener("load", main);