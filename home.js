/* 
============================================================
Header HTML injection
============================================================
*/

const HEADER_HTML = `
    <ul id="header_ul_left" class="header_ul">
        <li class="header_item">
            <a class="header_link" href="../home">Home</a>
        </li>
        <li class="header_item">
            <a class="header_link" href="../about">About</a>
        </li>
        <li class="header_item">
            <a class="header_link" href="../portfolio">Portfolio</a>
        </li>
        <li class="header_item">
            <a class="header_link" href="../resume">Resum&eacute;</a>
        </li>
    </ul>
    <ul id="header_ul_right" class="header_ul">
        <li class="header_item dropdown_title">
            Games
            <ul class="dropdown_ul">
                <li class="dropdown_item">
                    <a class="dropdown_link" href="../games/pong.html">Pong</a>
                </li>
                <li class="dropdown_item">
                    <a class="dropdown_link" href="../games/snowman.html">Snowman</a>
                </li>
            </ul>
        </li>
        <li class="header_item dropdown_title">
            Choose Theme
            <ul class="dropdown_ul">
                <li class="dropdown_item" id="default">
                    Default
                </li>
                <li class="dropdown_item" id="dark">
                    Dark
                </li>
                <li class="dropdown_item" id="darker">
                    Darker
                </li>
                <li class="dropdown_item" id="earthy">
                    Earthy
                </li>
                <li class="dropdown_item" id="random">
                    Random
                </li>
            </ul>
        </li>
    </ul>
`;

document.getElementById("header").innerHTML = HEADER_HTML;

/* 
============================================================
Home page animation
============================================================
*/

if (/home/.test(window.location.pathname)) {

    const NUM_PICS = {
        "A": 10,
        "D": 8,
        "M": 8,
        "G": 9,
        "U": 8,
        "N": 5,
        "PUNC": 26
    }

    const LETTER_LOCATION = (letter, index) => {
        return `../images/magazine/letters/${letter}${index}.png`
    }

    const unique_letter_ids = ["D", "M", "G", "U"];
    const all_letter_ids = ["A1", "D", "A2", "M", "G", "U", "N1", "N2", "PUNC"];

    var letter_indexes = {
        "A1": 0,
        "D": 0,
        "A2": 1,
        "M": 0,
        "G": 0,
        "U": 0,
        "N1": 0,
        "N2": 1,
        "PUNC": 0
    }

    const all_new_letters = () => {

        unique_letter_ids.forEach((id) => {
            const ltr = document.querySelector("#" + id);
            letter_indexes[id] = Math.floor(Math.random() * NUM_PICS[id]);
            ltr.src = LETTER_LOCATION(id, letter_indexes[id]);

        })

        const a1 = document.querySelector("#A1");
        letter_indexes["A1"] = Math.floor(Math.random() * NUM_PICS["A"]);
        a1.src = LETTER_LOCATION("A", letter_indexes["A1"]);
        const a2 = document.querySelector("#A2");
        letter_indexes["A2"] = Math.floor(Math.random() * NUM_PICS["A"]);
        while (letter_indexes["A1"] == letter_indexes["A2"]) {
            letter_indexes["A2"] = Math.floor(Math.random() * NUM_PICS["A"]);
        }
        a2.src = LETTER_LOCATION("A", letter_indexes["A2"]);

        const n1 = document.querySelector("#N1");
        letter_indexes["N1"] = Math.floor(Math.random() * NUM_PICS["N"]);
        n1.src = LETTER_LOCATION("N", letter_indexes["N1"]);
        const n2 = document.querySelector("#N2");
        letter_indexes["N2"] = Math.floor(Math.random() * NUM_PICS["N"]);
        while (letter_indexes["N1"] == letter_indexes["N2"]) {
            letter_indexes["N2"] = Math.floor(Math.random() * NUM_PICS["N"]);
        }
        n2.src = LETTER_LOCATION("N", letter_indexes["N2"]);

        const punc = document.querySelector("#PUNC");
        letter_indexes["PUNC"] = Math.floor(Math.random() * NUM_PICS["PUNC"]);
        punc.src = `../images/magazine/punctuation/${letter_indexes["PUNC"]}.png`;
    }

    const new_single_letter = () => {
        const NUM_SPOTS = 9;
        const changing_char = Math.floor(Math.random() * NUM_SPOTS);
        switch (changing_char) {
            case 0: {
                const A1 = document.getElementById("A1");
                const old_index = letter_indexes["A1"];
                letter_indexes["A1"] = Math.floor(Math.random() * NUM_PICS["A"]);
                while (letter_indexes["A1"] == letter_indexes["A2"] ||
                    letter_indexes["A1"] == old_index) {
                    letter_indexes["A1"] = Math.floor(Math.random() * NUM_PICS["A"]);
                }
                A1.src = LETTER_LOCATION("A", letter_indexes["A1"]);
                break;
            }

            case 2: {
                const A2 = document.getElementById("A2");
                const old_index = letter_indexes["A2"];
                letter_indexes["A2"] = Math.floor(Math.random() * NUM_PICS["A"]);
                while (letter_indexes["A1"] == letter_indexes["A2"] ||
                    letter_indexes["A2"] == old_index) {
                    letter_indexes["A2"] = Math.floor(Math.random() * NUM_PICS["A"]);
                }
                A2.src = LETTER_LOCATION("A", letter_indexes["A2"]);
                break;
            }
            case 6: {
                const N1 = document.getElementById("N1");
                const old_index = letter_indexes["N1"];
                letter_indexes["N1"] = Math.floor(Math.random() * NUM_PICS["N"]);
                while (letter_indexes["N1"] == letter_indexes["N2"] ||
                    letter_indexes["N1"] == old_index) {
                    letter_indexes["N1"] = Math.floor(Math.random() * NUM_PICS["N"]);
                }
                N1.src = LETTER_LOCATION("N", letter_indexes["N1"]);
                break;
            }

            case 7: {
                const N2 = document.getElementById("N2");
                const old_index = letter_indexes["N2"];
                letter_indexes["N2"] = Math.floor(Math.random() * NUM_PICS["N"]);
                while (letter_indexes["N1"] == letter_indexes["N2"] ||
                    letter_indexes["N2"] == old_index) {
                    letter_indexes["N2"] = Math.floor(Math.random() * NUM_PICS["N"]);
                }
                N2.src = LETTER_LOCATION("N", letter_indexes["N2"]);
                break;
            }
            case 8: {
                const PUNC = document.getElementById("PUNC");
                const old_index = letter_indexes["PUNC"];
                letter_indexes["PUNC"] = Math.floor(Math.random() * NUM_PICS["PUNC"]);
                while (letter_indexes["PUNC"] == old_index) {
                    letter_indexes["PUNC"] = Math.floor(Math.random() * NUM_PICS["PUNC"]);
                }
                PUNC.src = `../images/magazine/punctuation/${letter_indexes["PUNC"]}.png`;
                break;
            }
            default:
                const char = all_letter_ids[changing_char];
                const ltr = document.getElementById(char);
                const old_index = letter_indexes[char];
                letter_indexes[char] = Math.floor(Math.random() * NUM_PICS[char]);
                while (letter_indexes[char] == old_index) {
                    letter_indexes[char] = Math.floor(Math.random() * NUM_PICS[char]);
                }
                ltr.src = LETTER_LOCATION(char, letter_indexes[char]);
                break;
        }
    }

    all_new_letters();
    var interval = setInterval(() => {
        new_single_letter();
    }, 1000);
}

/* 
============================================================
About page rotation
============================================================
*/

if (/about/.test(window.location.pathname)) {

    const title = document.querySelector(".page_title");
    const NUM_COPIES = 8;
    for (var i = 1; i <= NUM_COPIES; ++i) {
        var copy = document.createElement('h1');
        copy.id = `page_title_copy_${i}`;
        copy.style.display = "none";
        title.appendChild(copy);
    }
    document.onmousemove = (e) => {
        // e.preventDefault();
        const width = window.innerWidth;
        const height = window.innerHeight;
        const x = e.clientX;
        const y = e.clientY;
        const transformation = `rotateY(${((x - (width / 2)) / (width / 2) * 90)}deg) rotateX(${(((height / 2) - y) / (height / 2) * 90)}deg)`
        title.style.transform = transformation;
    }
}

/* 
============================================================
Theme buttons
============================================================
*/

const color_var_names = ['--bg-color', '--text-color'];
const root = document.documentElement;
const options = ['default', 'dark', 'darker', 'earthy'];

// [background color, text color]
const colors = {
    "default": ["#ffffff", "#000000"],
    "dark": ["#222222", "#ffffff"],
    "darker": ["#000000", "#ffffff"],
    "earthy": ["#A0A083", "#EAE0CC"],
}
var saved_colors = [];
color_var_names.forEach((var_name, index) => {
    saved_colors[index] = localStorage.getItem(var_name) ?
        localStorage.getItem(var_name) : null;
})
if (saved_colors[0]) {
    saved_colors.forEach((color, index) => {
        root.style.setProperty(color_var_names[index], color);
    })
}


options.forEach((option) => {
    document.getElementById(option).onclick = (e) => {
        e.preventDefault();
        color_var_names.forEach((var_name, index) => {
            root.style.setProperty(var_name, colors[option][index]);
            localStorage.setItem(var_name, colors[option][index]);
        })
    }
})

const getRandomColor = () => {
    var letters = '0123456789abcdef';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById("random").onclick = (e) => {
    e.preventDefault();
    color_var_names.forEach((var_name) => {
        var color = getRandomColor();
        root.style.setProperty(var_name, color);
        localStorage.setItem(var_name, color);
    })
}

/* 
============================================================
Portfolio image display
============================================================
*/

if (/portfolio/.test(window.location.pathname)) {

    const location = (filename) => {
        return `../images/${filename}`;
    };

    const captions = {
        'affirmation.jpg': "An affirmation graphic meant to be posted on Instagram. Made in Illustrator.",
        'door_collage.jpg': "A sort of collage of pictures I took in Chicago during the summer of 2021. Made in Photoshop.",
        'fruitsurrealism.jpg': "Some fruit edited into a scene taken in Garfield Park on the west side of Chicago. Made in Photoshop.",
        'greenhousegas.jpg': "A small infographic depicting greenhouse gas emissions of different kinds of protein. Made in Illustrator.",
        'holescover.jpg': "A mockup cover for the novel \'Holes\' by Louis Sachar. Made in Illustrator.",
        'infographicfinal_01.jpg': "Page 1 of a two-page spread about the dangers of fake news. Made in Illustrator.",
        'infographicfinal_02.jpg': "Page 2 of a two-page spread about the dangers of fake news. Made in Illustrator.",
        'postcardfinal.jpg': "A postcard for the card game Uno. Made in Photoshop.",
        'posterfinal.jpg': "A magazine ad for the card game Uno. Made in Photoshop.",
        'typology.jpg': "A typology study of fronts of buildings in the East Ukrainian Village neighborhood of Chicago. Made in Photoshop.",
        'typology2.jpg': "An alternative version of the other typology study, just as an experiment messing with the Adjustments tab. Made in Photoshop."
    };

    const image_filenames = Object.keys(captions);

    const showOverlay = (filename) => {
        document.querySelector('body').style.overflow = 'hidden';
        document.getElementById('portfolio_display').src = location(filename);
        document.getElementById('portfolio_display_description').innerText = captions[filename];
        document.getElementById('portfolio_display_overlay').style.display = 'flex';
        document.getElementById('portfolio_display_overlay').onclick = (e) => {
            e.preventDefault();
            if (e.target.id != 'portfolio_display' &&
                e.target.id != 'portfolio_display_description') {
                hideOverlay();
            }
        }
    }

    const hideOverlay = () => {
        document.querySelector('body').style.overflow = 'auto';
        document.getElementById('portfolio_display_overlay').style.display = 'none';
    }

    const grid = document.getElementById('portfolio_grid');
    image_filenames.forEach((filename) => {
        let item = document.createElement('li');
        item.classList.add('grid_item');
        item.style.backgroundImage = `url('${location(filename)}')`;
        item.id = filename;
        item.onclick = (e) => {
            e.preventDefault();
            showOverlay(filename);
        }
        grid.appendChild(item);
    })
    document.getElementById('x_button').onclick = (e) => {
        e.preventDefault();
        hideOverlay();
    }

}