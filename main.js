// Load in the heading for each page
const heading = `
    <header>
        <ul class="headbar">
            <li>
                <a href=../home><img src=../images/my_face.png class="face" width="100" height="100" alt="Adam's face" /></a>
            </li>
            <li>
                <a href=../home id="adamGunn">Adam&nbsp;Gunn</a>
            </li>
        </ul>
        <ul class="navbar" id="navbar_links">
            <li><a href=../home class="navbar_text">Home</a></li>
            <li><a href=../about class="navbar_text">About</a></li>
            <li><a href=../portfolio class="navbar_text">Portfolio</a></li>
            <li><a href=../resume class="navbar_text">Resum&eacute;</a></li>
            <li><a href=../signup class="navbar_text">Sign up</a></li>\
            <li id="select_theme_navbar">
                <div class="color_scheme_select">
                    <a href="#" class="navbar_text" id="select_theme_text">Select Theme</a>
                    <div class="color_scheme_options">
                        <a class="option_button">Option 1</a>
                        <a class="option_button">Option 2</a>
                        <a class="option_button">Option 3</a>
                        <a class="option_button">Random</a>
                    </div>
                </div>
            </li>
        </ul>
    </header>
` ;
// Switch 'Adam Gunn' font and sticky header at top when scrolling down
var heading_loaded = false;

var fonts = ['blenny', 'Palette Mosaic', 'rig-solid-light-halftone', 'blackcurrant-squash', 'variex', 'hobeaux-rococeaux-background', 'whomp', 'joschmi', 'xants', 'alfarn'];
var chosen_font = fonts[Math.floor(Math.random() * fonts.length)];

window.addEventListener('DOMContentLoaded', () => {
    let page_header = document.querySelector('heading');
    page_header.innerHTML = heading;
    heading_loaded = true;
    document.getElementById('adamGunn').style.fontFamily = chosen_font;
    theme_options[0].addEventListener("click",
        function (event) {
            event.preventDefault();
            // document.documentElement.setAttribute('data-theme', 'option1');
            let root = document.documentElement;
            root.style.setProperty('--bg-color', "#A0A083");
            root.style.setProperty('--text-color', "#EAE0CC");
            root.style.setProperty('--button-color-noicon', "#798478");
            root.style.setProperty('--button-color-icon', "#4D6A6D");
            root.style.setProperty('--face-animation-color', "#C9ADA1");
            root.style.setProperty('--shadow-color', "#222222");
            root.style.setProperty('--button-text-color', "white");
            localStorage.setItem('bg-color', "#A0A083");
            localStorage.setItem('text-color', "#EAE0CC");
            localStorage.setItem('button-color-noicon', "#798478");
            localStorage.setItem('button-color-icon', "#4D6A6D");
            localStorage.setItem('face-animation-color', "#C9ADA1");
            localStorage.setItem('shadow-color', "#222222");
            localStorage.setItem('button-text-color', "white");
        }
    , false);
    theme_options[1].addEventListener("click",
        function (event) {
            event.preventDefault();
            // document.documentElement.setAttribute('data-theme', 'option2');
            let root = document.documentElement;
            root.style.setProperty('--bg-color', "#d6d633");
            root.style.setProperty('--text-color', "1d1c19");
            root.style.setProperty('--button-color-noicon', "#000000");
            root.style.setProperty('--button-color-icon', "#0d4950");
            root.style.setProperty('--face-animation-color', "#ff4d00");
            root.style.setProperty('--shadow-color', "#ccbfbf");
            root.style.setProperty('--button-text-color', "rgb(255, 0, 0)");
            localStorage.setItem('bg-color', "#d6d633");
            localStorage.setItem('text-color', "1d1c19");
            localStorage.setItem('button-color-noicon', "#000000");
            localStorage.setItem('button-color-icon', "#0d4950");
            localStorage.setItem('face-animation-color', "#ff4d00");
            localStorage.setItem('shadow-color', "#ccbfbf");
            localStorage.setItem('button-text-color', "rgb(255, 0, 0)");
        }
    , false);
    theme_options[2].addEventListener("click",
        function (event) {
            event.preventDefault();
            // document.documentElement.setAttribute('data-theme', 'option3');
            let root = document.documentElement;
            root.style.setProperty('--bg-color', "#0e2a79");
            root.style.setProperty('--text-color', "#e7e7e7");
            root.style.setProperty('--button-color-noicon', "#f10497");
            root.style.setProperty('--button-color-icon', "#0adaf1");
            root.style.setProperty('--face-animation-color', "#bb8e7a");
            root.style.setProperty('--shadow-color', "#076e18");
            root.style.setProperty('--button-text-color', "rgb(139, 52, 52)");
            
        }
    , false);
    theme_options[3].addEventListener("click",
        function (event) {
            event.preventDefault();
            let root = document.documentElement;
            var random_bg_color = "#" + Math.floor(Math.random() * 16777215).toString(16);
            var random_text_color = "#" + Math.floor(Math.random() * 16777215).toString(16);
            var random_button_color_noicon = "#" + Math.floor(Math.random() * 16777215).toString(16);
            var random_button_color_icon = "#" + Math.floor(Math.random() * 16777215).toString(16);
            var random_face_animation_color = "#" + Math.floor(Math.random() * 16777215).toString(16);
            var random_shadow_color = "#" + Math.floor(Math.random() * 16777215).toString(16);
            var random_button_text_color = "#" + Math.floor(Math.random() * 16777215).toString(16);
            root.style.setProperty('--bg-color', random_bg_color);
            root.style.setProperty('--text-color', random_text_color);
            root.style.setProperty('--button-color-noicon', random_button_color_noicon);
            root.style.setProperty('--button-color-icon', random_button_color_icon);
            root.style.setProperty('--face-animation-color', random_face_animation_color);
            root.style.setProperty('--shadow-color', random_shadow_color);
            root.style.setProperty('--button-text-color', random_button_text_color);
        }
    , false);
});

var header; 
var sticky; 
window.onscroll = function() {stickyHeader()};
                        
function stickyHeader() {
    if (heading_loaded) {
        header = document.getElementById("navbar_links");
        sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        }
        else {
            header.classList.remove("sticky");
        }
    }
}

// Switch themes
var theme_options = document.getElementsByClassName("option_button");