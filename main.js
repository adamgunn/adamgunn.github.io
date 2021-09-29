// Load in the heading for each page
const heading = `
    <header>
        <ul class="navbar" id="sign-up-log-in">
            <li><a href=../sign-up class="navbar_text">Sign up</a></li>
            <li><a href=../log-in class="navbar_text">Log in</a></li>
        </ul>
        <div id="select_theme_navbar">
            <div class="color_scheme_select">
                <a class="navbar_text" id="select_theme_text">Choose Theme</a>
                <div class="color_scheme_options">
                    <a class="option_button">Default</a><br>
                    <a class="option_button">Dramatic</a><br>
                    <a class="option_button">Neat</a><br>
                    <a class="option_button">Earthy</a><br>
                    <a class="option_button">Random</a>
                </div>
            </div>
        </div>
        <ul class="headbar">
            <li>
                <a id="adamGunn" title="CLICK ME FOR A GOOD TIME">Adam Gunn</a>
            </li>
        </ul>
        <ul class="navbar" id="navbar_links">
            <li><a href=../home class="navbar_text">Home</a></li>
            <li><a href=../about class="navbar_text">About</a></li>
            <li><a href=../portfolio class="navbar_text">Portfolio</a></li>
            <li><a href=../resume class="navbar_text">Resum&eacute;</a></li>
            <li id="select_games_navbar">
                <div class="games_select">
                    <a class="navbar_text" id="select_game_text">Games</a>
                    <div class="game_options">
                        <a href="../games/snowman.html" class="game_button">Snowman</a>
                        <a href="../games/pong.html" class="game_button">Pong</a>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="navbar navbar_hidden" id="navbar_links_sticky">
            <div class="navbar_hidden" id="select_theme_navbar_sticky">
                <div class="color_scheme_select">
                    <a class="navbar_text" id="select_theme_text">Choose Theme</a>
                    <div class="color_scheme_options">
                        <a class="option_button">Default</a><br>
                        <a class="option_button">Dramatic</a><br>
                        <a class="option_button">Neat</a><br>
                        <a class="option_button">Earthy</a><br>
                        <a class="option_button">Random</a>
                    </div>
                </div>
            </div>
            <li><a href=../home class="navbar_text">Home</a></li>
            <li><a href=../about class="navbar_text">About</a></li>
            <li><a href=../portfolio class="navbar_text">Portfolio</a></li>
            <li><a href=../resume class="navbar_text">Resum&eacute;</a></li>
            <li id="select_games_navbar">
                <div class="games_select">
                    <a class="navbar_text" id="select_game_text">Games</a>
                    <div class="game_options">
                        <a href="../games/snowman.html" class="game_button">Snowman</a>
                        <a href="../games/pong.html" class="game_button">Pong</a>
                    </div>
                </div>
            </li>
            <ul class="navbar navbar_hidden" id="sign-up-log-in-sticky">
                <li><a href=../sign-up class="navbar_text">Sign up</a></li>
                <li><a href=../log-in class="navbar_text">Log in</a></li>
            </ul>
        </ul>
    </header>
` ;

const contacts = `
    <h2 class="subtitle" id="get-in-touch">Get in touch</h2>
    <ul class="icon_button_set" id="contacts">
        <li><a href="mailto:asgunn@umich.edu" target="_blank" rel="noopener noreferrer">
            <ul class="icon_button">
                <li>
                    <svg class="icon" id="mail_icon" width="32" height="32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 400 400" style="enable-background:new 0 0 400 400;" xml:space="preserve">
                        <g id="XMLID_1_">
                            <polygon id="XMLID_869_" class="st0" points="0,127.5 0,274.2 104.8,206.1 	"/>
                            <polygon id="XMLID_870_" class="st0" points="400,274.2 400,127.5 295.2,206.1 	"/>
                            <path id="XMLID_871_" class="st0" d="M200,277.5l-69.6-52.2L0,310v9c0,11.6,9.4,21,21,21h358c11.6,0,21-9.4,21-21v-9l-130.4-84.7
                                L200,277.5z"/>
                            <path id="XMLID_872_" class="st0" d="M0,90l200,150L400,90v-9c0-11.6-9.4-21-21-21H21C9.4,60,0,69.4,0,81V90z"/>
                        </g>
                    </svg>
                </li>
                <!-- <li class="icon_button_text"> E-mail</li> -->
            </ul></a>
        </li>
        <li><a href="https://github.com/adamgunn" target="_blank" rel="noopener noreferrer">
            <ul class="icon_button">
                <li>
                    <svg class="icon" id="github_icon" width="32" height="32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
                        <path class="st0" d="M10.7,0.1C5.1,0.7,0.7,5.3,0.1,10.9c-0.6,5.8,2.6,11,7.6,13C8,24,8.4,23.7,8.4,23.2v-2c0,0-0.5,0.1-1.1,0.1
                            c-1.7,0-2.4-1.5-2.5-2.4c-0.1-0.5-0.4-0.9-0.7-1.2c-0.4-0.1-0.5-0.1-0.5-0.2c0-0.2,0.4-0.2,0.5-0.2c0.7,0,1.3,0.9,1.6,1.2
                            c0.6,1,1.3,1.2,1.7,1.2c0.5,0,0.8-0.1,1.1-0.2c0.1-0.9,0.5-1.7,1.2-2.2c-2.8-0.6-4.8-2.2-4.8-5c0-1.4,0.6-2.7,1.4-3.7
                            C6.1,8.4,6,7.8,6,6.9c0-0.5,0-1.2,0.4-2c0,0,1.7,0,3.4,1.6c0.6-0.2,1.4-0.4,2.3-0.4c0.8,0,1.7,0.1,2.4,0.4c1.6-1.6,3.4-1.6,3.4-1.6
                            C18,5.7,18,6.4,18,6.9c0,1-0.1,1.5-0.2,1.7c0.8,1,1.4,2.2,1.4,3.7c0,2.7-2,4.3-4.8,5c0.7,0.6,1.2,1.7,1.2,2.8v3.2
                            c0,0.4,0.4,0.7,0.8,0.6c4.4-1.9,7.6-6.3,7.6-11.5C24,5,17.9-0.8,10.7,0.1z"/>
                    </svg>
                </li>
                <!-- <li class="icon_button_text"> Github</li> -->
            </ul></a>
        </li>
        <li><a href="https://www.linkedin.com/in/adam-gunn-332a73200/" target="_blank" rel="noopener noreferrer">
            <ul class="icon_button">
                <li>
                    <svg class="icon" id="linkedin_icon" width="32" height="32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
                        <path class="st0" d="M5,3.5C5,4.9,3.9,6,2.5,6S0,4.9,0,3.5C0,2.1,1.1,1,2.5,1S5,2.1,5,3.5z M5,8H0v16h5V8z M13,8H8v16h5v-8.4
                            c0-4.7,6-5.1,6,0V24h5V13.9c0-7.9-8.9-7.6-11-3.7C13,10.2,13,8,13,8z"/>
                    </svg>
                </li>
                <!-- <li class="icon_button_text"> Linkedin</li> -->
            </ul></a>
        </li>
    </ul>
`;
// Switch 'Adam Gunn' font and sticky header at top when scrolling down
var heading_loaded = false;

var fonts = ['franklin-gothic-condensed', 'lust-text', 'Palette Mosaic', 'blackcurrant-squash', 'variex', 'hobeaux-rococeaux-background', 'joschmi', 'xants'];
var color_var_names = ['--bg-color', '--text-color', '--button-color-noicon', '--button-color-icon', '--face-animation-color', '--shadow-color', '--button-text-color'];
var option1_colors  = ["#FFFAFA",    "#000000",      "#B22222",               "#800080",             "#FFFFE0",                "#222222",        "#FFFAFA"            ];
var option2_colors  = ["#d6d633",    "#1d1c19",      "#000000",               "#0d4950",             "#ff4d00",                "#ccbfbf",        "rgb(255, 0, 0)"     ];
var option3_colors  = ["#0e2a79",    "#e7e7e7",      "#f10497",               "#0adaf1",             "#bb8e7a",                "#076e18",        "rgb(139, 52, 52)"   ];
var option4_colors  = ["#A0A083",    "#EAE0CC",      "#798478",               "#4D6A6D",             "#C9ADA1",                "#222222",        "#FFFFFF"            ];
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
var displaying_portfolio_item = false;
const descriptions = [
    "An affirmation graphic meant to be posted on Instagram. Made in Illustrator.",
    "A sort of collage of pictures I took in Chicago during the summer of 2021. Made in Photoshop.",
    "Some fruit edited into a scene taken in Garfield Park on the west side of Chicago. Made in Photoshop.",
    "A small infographic depicting greenhouse gas emissions of different kinds of protein. Made in Illustrator.",
    "A mockup cover for the novel \'Holes\' by Louis Sachar. Made in Illustrator.",
    "Page 1 of a two-page spread about the dangers of fake news. Made in Illustrator.",
    "Page 2 of a two-page spread about the dangers of fake news. Made in Illustrator.",
    "A postcard for the card game Uno. Made in Photoshop.",
    "A magazine ad for the card game Uno. Made in Photoshop.",
    "A typology study of fronts of buildings in the East Ukrainian Village neighborhood of Chicago. Made in Photoshop.",
    "An alternative version of the other typology study, just as an experiment messing with the Adjustments tab. Made in Photoshop."
]

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

window.addEventListener('DOMContentLoaded', () => {
    let page_header = document.querySelector('div.header-container');
    page_header.innerHTML = heading;
    heading_loaded = true;
    let page_contacts = document.querySelector('div.contacts_container');
    page_contacts.innerHTML = contacts;
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
            for (var i = 0; i < color_var_names.length; i++) {
                root.style.setProperty(color_var_names[i], option4_colors[i]);
                localStorage.setItem(color_var_names_local_storage[i], option4_colors[i]);
            }
        }
    , false);
    theme_options[4].addEventListener("click",
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
    theme_options[5].addEventListener("click",
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
    theme_options[6].addEventListener("click",
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
    theme_options[7].addEventListener("click",
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
    theme_options[8].addEventListener("click",
        function (event) {
            event.preventDefault();
            // document.documentElement.setAttribute('data-theme', 'option3');
            let root = document.documentElement;
            for (var i = 0; i < color_var_names.length; i++) {
                root.style.setProperty(color_var_names[i], option4_colors[i]);
                localStorage.setItem(color_var_names_local_storage[i], option4_colors[i]);
            }
        }
    , false);
    theme_options[9].addEventListener("click",
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
    var get_in_touch = document.getElementById("get-in-touch");
    if (saved_font) {
        get_in_touch.style.fontFamily = my_name.style.fontFamily = saved_font;
        my_name.classList.add('switching_font');
        get_in_touch.classList.add('switching_font');
        setTimeout(function() {
            my_name.classList.remove('switching_font');
            get_in_touch.classList.remove('switching_font');
        }, 280);
    }
    else {
        chosen_font = fonts[Math.floor(Math.random() * fonts.length)];
        get_in_touch.style.fontFamily = my_name.style.fontFamily = chosen_font;
        my_name.classList.add('switching_font');
        get_in_touch.classList.add('switching_font');
        setTimeout(function() {
            my_name.classList.remove('switching_font');
            get_in_touch.classList.remove('switching_font');
        }, 280);
        localStorage.setItem('name_font', chosen_font);
    }
    my_name.addEventListener("click",
        function (event) {
            event.preventDefault();
            chosen_font = fonts[Math.floor(Math.random() * fonts.length)];
            get_in_touch.style.fontFamily = my_name.style.fontFamily = chosen_font;
            my_name.classList.add('switching_font');
            get_in_touch.classList.add('switching_font');
            setTimeout(function() {
                my_name.classList.remove('switching_font');
                get_in_touch.classList.remove('switching_font');
            }, 280);
            localStorage.setItem('name_font', chosen_font);
        }
    , false);
    const portfolio_display = document.getElementById("portfolio-display");
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener("click", 
            function(e) {
                e.preventDefault();
                image = item.style.backgroundImage;
                var target = getEventTarget(e);
                var li = target.closest('li');
                var nodes = Array.from(li.closest('ul').children);
                var index = nodes.indexOf(li);
                portfolio_display.style.backgroundImage = image;
                document.querySelector('body').style.setProperty('overflow', 'hidden');
                document.getElementById("portfolio-display-container").style.setProperty("margin-top", window.scrollY + "px");
                document.getElementById("portfolio-display-description").innerHTML = descriptions[index];
                document.getElementById("portfolio-display-container").style.setProperty("display", "flex");
                displaying_portfolio_item = true;
            }
        , false);
    });
    document.getElementById('x-button').addEventListener('click',
        function(e) {
            e.preventDefault();
            if (displaying_portfolio_item) {
                displaying_portfolio_item = false;
                document.getElementById("portfolio-display-container").style.setProperty("display", "none");
                document.querySelector('body').style.setProperty('overflow', 'auto');
            }
        }
    , false)
});

var header; 
var sticky; 
window.onscroll = function() {stickyHeader()};
                        
function stickyHeader() {
    if (heading_loaded) {
        header = document.getElementById("navbar_links_sticky");
        change_theme = document.getElementById("select_theme_navbar_sticky")
        sign_up_log_in = document.getElementById("sign-up-log-in-sticky");
        sticky = header.offsetTop;
        sticky += 200;
        if (window.pageYOffset > (sticky)) {
            header.classList.add("sticky");
            header.classList.remove("navbar_hidden");
            change_theme.classList.remove("navbar_hidden");
            sign_up_log_in.classList.remove("navbar_hidden");
        }
        else {
            header.classList.remove("sticky");
            header.classList.add("navbar_hidden");
            change_theme.classList.add("navbar_hidden");
            sign_up_log_in.classList.add("navbar_hidden");
        }
    }
}

// Switch themes
var theme_options = document.getElementsByClassName("option_button");