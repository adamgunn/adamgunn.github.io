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
                <a href=../home><img src=../images/my_face.png class="face" width="85" height="85" alt=" face" /></a>
            </li>
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
        <li><a href="https://www.instagram.com/admgnn/" target="_blank" rel="noopener noreferrer">
            <ul class="icon_button">
                <li>
                    <svg class="icon" id="instagram_icon" width="32" height="32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
                        <path class="st0" d="M6.7,0C3,0,0,3,0,6.7v10.7C0,21,3,24,6.7,24h10.7c3.7,0,6.7-3,6.7-6.7V6.7C24,3,21,0,17.3,0H6.7z M6.7,2.7h10.7
                            c2.2,0,4,1.8,4,4v10.7c0,2.2-1.8,4-4,4H6.7c-2.2,0-4-1.8-4-4V6.7C2.7,4.5,4.5,2.7,6.7,2.7z M18.7,4c-0.7,0-1.3,0.6-1.3,1.3
                            s0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3S19.4,4,18.7,4z M12,5.3c-3.7,0-6.7,3-6.7,6.7s3,6.7,6.7,6.7s6.7-3,6.7-6.7S15.7,5.3,12,5.3z
                            M12,8c2.2,0,4,1.8,4,4s-1.8,4-4,4s-4-1.8-4-4S9.8,8,12,8z"/>
                    </svg>
                </li>
                <!-- <li class="icon_button_text"> Instagram</li> -->
            </ul></a>
        </li>
        <li><a href="https://open.spotify.com/user/adamsgunnn" target="_blank" rel="noopener noreferrer">
            <ul class="icon_button">
                <li>
                    <svg class="icon" id="spotify_icon" width="32" height="32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
                        <path class="st0" d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M16.9,17.3c-0.2,0-0.3-0.1-0.6-0.2
                            c-1.7-1-3.8-1.6-6.1-1.6c-1.2,0-2.6,0.2-3.7,0.5C6.3,15.9,6,16,5.9,16c-0.5,0-0.8-0.3-0.8-0.8s0.2-0.8,0.7-0.8
                            c1.5-0.3,2.9-0.6,4.5-0.6c2.6,0,5,0.7,7,1.8c0.2,0.2,0.5,0.3,0.5,0.8C17.5,17.1,17.2,17.3,16.9,17.3z M18.1,14.1
                            c-0.2,0-0.5-0.1-0.7-0.2c-1.9-1.2-4.6-1.9-7.6-1.9C8.4,12,7,12.2,6,12.4c-0.2,0.1-0.3,0.1-0.6,0.1c-0.6,0-0.9-0.5-0.9-0.9
                            c0-0.6,0.2-0.8,0.8-1C6.7,10.3,8.1,10,10,10c3.2,0,6.1,0.8,8.6,2.3c0.3,0.2,0.6,0.6,0.6,0.9C19,13.7,18.7,14.1,18.1,14.1z
                            M19.6,10.5c-0.2,0-0.3-0.1-0.7-0.2c-2.3-1.2-5.5-2-8.7-2c-1.6,0-3.3,0.2-4.7,0.6c-0.2,0-0.3,0.1-0.7,0.1C4.1,9,3.7,8.5,3.7,7.8
                            s0.3-1,0.8-1.1C6.3,6.2,8.2,6,10.2,6c3.5,0,7.1,0.8,9.9,2.3c0.3,0.2,0.7,0.6,0.7,1.1C20.7,10.1,20.3,10.5,19.6,10.5z"/>
                    </svg>
                </li>
                <!-- <li class="icon_button_text"> Spotify</li> -->
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
        <!-- <li><a href="https://discordapp.com/users/ag!#1000" target="_blank" rel="noopener noreferrer">
            <ul class="icon_button">
                <li><img src=../images/discord-icon.svg class="icon" id= "discord_icon" width="32" height="32" alt="Discord icon"></li>
                <li class="icon_button_text"> Discord</li>
            </ul></a>
        </li> -->
    </ul>
`;
// Switch 'Adam Gunn' font and sticky header at top when scrolling down
var heading_loaded = false;

var fonts = ['franklin-gothic-condensed', 'lust-text', 'blenny', 'Palette Mosaic', 'rig-solid-light-halftone', 'blackcurrant-squash', 'variex', 'hobeaux-rococeaux-background', 'whomp', 'joschmi', 'xants', 'alfarn'];
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