// Load in the heading for each page
const heading = `
    <header>
        <ul class="headbar">
            <li>
                <a href=../home><img src=../images/my_face.png class="face" width="100" height="100" alt=" face" /></a>
            </li>
            <li>
                <a id="adamGunn" title="CLICK ME FOR A GOOD TIME">Adam&nbsp;Gunn</a>
            </li>
        </ul>
        <ul class="navbar" id="navbar_links">
            <li><a href=../home class="navbar_text">Home</a></li>
            <li><a href=../about class="navbar_text">About</a></li>
            <li><a href=../portfolio class="navbar_text">Portfolio</a></li>
            <li><a href=../resume class="navbar_text">Resum&eacute;</a></li>
            <li><a href=../sign-up class="navbar_text">Sign up</a></li>
            <li id="select_games_navbar">
                <div class="games_select">
                    <a href="../games" class="navbar_text" id="select_game_text">Games</a>
                    <div class="game_options">
                        <a href="../games/mad-libs.html" class="game_button">Mad&nbsp;Libs</a>
                        <a href="../games/pong.html" class="game_button">Pong</a>
                    </div>
                </div>
            </li>
            <li id="select_theme_navbar">
                <div class="color_scheme_select">
                    <a class="navbar_text" id="select_theme_text">Choose Theme</a>
                    <div class="color_scheme_options">
                        <a class="option_button">Default</a><br>
                        <a class="option_button">Edgy</a><br>
                        <a class="option_button">Neat</a><br>
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
var color_var_names = ['--bg-color', '--text-color', '--button-color-noicon', '--button-color-icon', '--face-animation-color', '--shadow-color', '--button-text-color'];
var option1_colors = ["#A0A083", "#EAE0CC", "#798478", "#4D6A6D", "#C9ADA1", "#222222", "white"];
var option2_colors = ["#d6d633", "#1d1c19", "#000000", "#0d4950", "#ff4d00", "#ccbfbf", "rgb(255, 0, 0)"];
var option3_colors = ["#0e2a79", "#e7e7e7", "#f10497", "#0adaf1", "#bb8e7a", "#076e18", "rgb(139, 52, 52)"]
var color_var_names_local_storage = [];
for (var i = 0; i < color_var_names.length; i++) {
    var current_string = color_var_names[i];
    current_string.slice(2);
    color_var_names_local_storage.push(current_string);
}
const saved_colors = [];
for (var i = 0; i < color_var_names_local_storage.length; i++) {
    saved_colors[i] = localStorage.getItem(color_var_names_local_storage[i]) ? localStorage.getItem(color_var_names_local_storage[i]) : null;
}
if (saved_colors[0]) {
    let root = document.documentElement;
    for (var i = 0; i < saved_colors.length; i++) {
        root.style.setProperty(color_var_names[i], saved_colors[i]);
    }
}
const saved_font = localStorage.getItem('name_font') ? localStorage.getItem('name_font') : null;
function getRandomColor() {
    var letters = '0123456789abcdef';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

window.addEventListener('DOMContentLoaded', () => {
    let page_header = document.querySelector('heading');
    page_header.innerHTML = heading;
    heading_loaded = true;
    theme_options[0].addEventListener("click",
        function (event) {
            event.preventDefault();
            // document.documentElement.setAttribute('data-theme', 'option1');
            let root = document.documentElement;
            for (var i = 0; i < color_var_names.length; i++) {
                root.style.setProperty(color_var_names[i], option1_colors[i]);
                localStorage.setItem(color_var_names_local_storage[i], option1_colors[i]);
            }
        }
    , false);
    theme_options[1].addEventListener("click",
        function (event) {
            event.preventDefault();
            // document.documentElement.setAttribute('data-theme', 'option2');
            let root = document.documentElement;
            for (var i = 0; i < color_var_names.length; i++) {
                root.style.setProperty(color_var_names[i], option2_colors[i]);
                localStorage.setItem(color_var_names_local_storage[i], option2_colors[i]);
            }
        }
    , false);
    theme_options[2].addEventListener("click",
        function (event) {
            event.preventDefault();
            // document.documentElement.setAttribute('data-theme', 'option3');
            let root = document.documentElement;
            for (var i = 0; i < color_var_names.length; i++) {
                root.style.setProperty(color_var_names[i], option3_colors[i]);
                localStorage.setItem(color_var_names_local_storage[i], option3_colors[i]);
            }
        }
    , false);
    theme_options[3].addEventListener("click",
        function (event) {
            event.preventDefault();
            let root = document.documentElement;
            var random_colors = [];
            for (var i = 0; i < color_var_names.length; i++) {
                random_colors.push(getRandomColor());
                root.style.setProperty(color_var_names[i], random_colors[i]);
                localStorage.setItem(color_var_names_local_storage[i], random_colors[i]);
            }
        }
    , false);
    var my_name = document.getElementById("adamGunn");
    if (saved_font) {
        my_name.style.fontFamily = saved_font;
    }
    else {
        chosen_font = fonts[Math.floor(Math.random() * fonts.length)];
        my_name.style.fontFamily = chosen_font;
        localStorage.setItem('name_font', chosen_font);
    }
    my_name.addEventListener("click",
        function (event) {
            event.preventDefault();
            chosen_font = fonts[Math.floor(Math.random() * fonts.length)];
            my_name.style.fontFamily = chosen_font;
            localStorage.setItem('name_font', chosen_font);
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