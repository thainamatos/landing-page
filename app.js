var modeButton; 
var bigWrapper;
var menu;
const main = document.querySelector("main");

function declare(){
    modeButton = document.querySelector(".mode-button");
    bigWrapper = document.querySelector(".big-wrapper");
    menu = document.querySelector(".menu");
}

declare();

let dark = false;

function modeAnimation() {
    //clonar landing page inteira
    dark = !dark;
    let clone = bigWrapper.cloneNode(true);
    if (dark) {
        clone.classList.remove("light");
        clone.classList.add("dark");
    } else {
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

    clone.addEventListener("animationend", () => {
        bigWrapper.remove(),
        clone.classList.remove("copy");
        //resertar variaveis
        declare();
        events()
    });
}

function events() {
    modeButton.addEventListener('click', modeAnimation);
    menu.addEventListener("click", () => {
        bigWrapper.classList.toggle("active");
      });
}

events();