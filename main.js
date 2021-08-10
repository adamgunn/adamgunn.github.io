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
                        <a href="#">Option 1</a>
                        <a href="#">Option 2</a>
                        <a href="#">Option 3</a>
                    </div>
                </div>
            </li>
        </ul>
    <header
` ;

var heading_loaded = false;
var fonts = ['blenny', 'Palette Mosaic', 'rig-solid-light-halftone', 'blackcurrant-squash', 'variex', 'hobeaux-rococeaux-background', 'whomp', 'joschmi', 'xants', 'alfarn'];
var chosen_font = fonts[Math.floor(Math.random() * fonts.length)];

window.addEventListener('DOMContentLoaded', () => {
    let page_header = document.querySelector('heading');
    page_header.innerHTML = heading;
    heading_loaded = true;
    document.getElementById('adamGunn').style.fontFamily = chosen_font;
});

// Sticky header
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

