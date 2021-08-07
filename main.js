const heading = `
    <header>
        <ul class="headbar">
            <li>
                <a href=../home><img src=../images/my_face.png class="face" width="100" height="100" alt="Adam's face" /></a>
            </li>
            <li>
                <a href=../home class="adamGunn">Adam&nbsp;Gunn</a>
            </li>
        </ul>
        <ul class="navbar" id="navbar_links">
            <li><a href=../home>Home</a></li>
            <li><a href=../about>About</a></li>
            <li><a href=../portfolio>Portfolio</a></li>
            <li><a href=../resume>Resum&eacute;</a></li>
            <li><a href=../signup>Sign up</a></li>
        </ul>
    <header
` ;

var heading_loaded = false;
var header; 
var sticky; 

window.addEventListener('DOMContentLoaded', () => {
    let page_header = document.querySelector('heading');
    page_header.innerHTML = heading;
    heading_loaded = true;
});

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