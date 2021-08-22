class Snowman {
    num_players;
    player0_name;
    player1_name;
    word = "";
    wrong_letters = [];
    displaying_word = [];
    losing_letters;
    available_letters = {"A": true,
                         "B": true,
                         "C": true,
                         "D": true,
                         "E": true,
                         "F": true,
                         "G": true,
                         "H": true,
                         "I": true,
                         "J": true,
                         "K": true,
                         "L": true,
                         "M": true,
                         "N": true,
                         "O": true,
                         "P": true,
                         "Q": true,
                         "R": true,
                         "S": true,
                         "T": true,
                         "U": true,
                         "V": true,
                         "W": true,
                         "X": true,
                         "Y": true,
                         "Z": true};
    num_letters_left;
    game_started = false;
    word_bank = ["YOU'RE NOT THAT GUY PAL",
                 "DAMN I MESSED UP... WE GOTTA GO BALD",
                 "HOW ARE THE CHILDREN",
                 "NO IFS, ANDS, OR BUTS",
                 "NO CUTS NO BUTTS NO COCONUTS",
                 "CRISS-CROSS APPLESAUCE",
                 "I GUESS WE'LL NEVER KNOW",
                 "DON'T COUNT YOUR CHICKENS BEFORE THEY HATCH",
                 "DON'T GET IT TWISTED",
                 "RISK IT FOR THE BISCUIT",
                 "MY BEAUTIFUL DARK TWISTED FANTASY",
                 "THE DOG ATE MY HOMEWORK",
                 ];

    constructor(num_players, player0_name, player1_name) {
        this.num_players = num_players;
        this.player0_name = player0_name;
        this.player1_name = player1_name;
    }

    get word() {
        return this.word;
    }

    get wrong_letters() {
        return this.wrong_letters;
    }

    set word(word_input) {
        this.word = word_input;
    }

    pickWord() {
        var snowmanHTML = document.querySelector('snowman');
        if (this.num_players == 2) {
            snowmanHTML.innerHTML = `
            <ul>
                <li>
                    <h2 class="subtitle">${this.player0_name}, avert your eyes!</h2>
                    <label for="pick_word" class="subtitle">${this.player1_name}, pick something for ${this.player0_name} to guess</label>
                    <br>
                    <input type="text" id="pick_word" name="pick_word" required onchange=(verifyWord()) />
                </li>
                <li>
                    <button class="submit_button" id="submit_word" onclick=(beginSnowmanGame()) disabled>Submit</button>
                </li>
            </ul>
            `
        }
        else if (this.num_players == 1) {
            this.word = this.word_bank[Math.floor(Math.random() * this.word_bank.length)];
            this.num_letters_left = 0;
            for (var i = 0; i < this.word.length; i++) {
                if (!isALetter(this.word[i])) {
                    this.displaying_word.push(this.word[i] + " ");
                }
                else {
                    this.num_letters_left++;
                    this.displaying_word.push("_ ");
                }
            }
            this.printGame();
        }
    }
    
    printGame() {
        this.game_started = true;
        var snowmanHTML = document.querySelector('snowman');
        var stickman_svg = `
            <img src="../images/snowman-${this.wrong_letters.length}.svg" width="600" height="600" id="snowman-game" alt="Snowman game"/>
        `;
        snowmanHTML.innerHTML = stickman_svg;
        snowmanHTML.innerHTML += `<pre><p class="bodyText">${this.updateDisplayWord()}</p></pre>`;
        snowmanHTML.innerHTML += `<pre><p class="bodyText">Wrong letters: ${this.updateUsedLetters()}</p></pre>`;

    }

    updateDisplayWord() {
        var display_text = "";
        for (var i = 0; i < this.displaying_word.length; i++) {
            display_text += this.displaying_word[i];
        }
        return display_text;
    }

    updateUsedLetters() {
        var display_text = "";
        for (var i = 0; i < this.wrong_letters.length; i++) {
            display_text += (this.wrong_letters[i] + " ");
        }
        return display_text;
    }

    playLetter(char) {
        if (this.word.includes(char) && this.available_letters[char] == true) {
            this.available_letters[char] = false;
            for (var i = 0; i < this.displaying_word.length; i++) {
                if (this.word[i] == (char)) {
                    this.displaying_word[i] = (char + " ");
                    this.num_letters_left--;
                }
            }
        } else if (!this.word.includes(char) && this.available_letters[char] == true) {
            this.wrong_letters.push(char);
            this.available_letters[char] = false;
        }
        if (this.wrong_letters.length >= this.losing_letters) {
            var snowmanHTML = document.querySelector('snowman');
            var losing_message;
            if (this.num_players == 2) {
                losing_message = this.player1_name + " wins!";
            } else {
                losing_message = this.player0_name + ", you lost!";
            }
            snowmanHTML.innerHTML = `
            <img src="../images/snowman-${this.losing_letters}.svg" width="600" height="600" id="snowman-game" alt="Snowman game"/>
            <h2 class="subtitle">${losing_message}</h2>
            <a href="" class="game_link"><h2 class="subtitle">Click here to play again</h2></a>
            `;
            this.game_started = false;
        }
        else if (this.num_letters_left == 0) {
            var snowmanHTML = document.querySelector('snowman');
            var winning_message;
            if (this.num_players == 2) {
                winning_message = this.player0_name + " wins!";
            } else {
                winning_message = this.player0_name + ", you won!"
            }
            snowmanHTML.innerHTML = `
            <img src="../images/snowman-${this.wrong_letters.length}.svg" width="600" height="600" id="snowman-game" alt="Snowman game"/>
            <h2 class="subtitle">${winning_message}</h2>
            <a href="" class="game_link"><h2 class="subtitle">Click here to play again</h2></a>
            `;
            this.game_started = false;
        }
        else {
            this.printGame();
        }
    }

}

document.addEventListener("keyup", function(e) {
    if (isALetter(e.code.slice(3))) {
        var char = e.code.slice(3);
        if (snowman_game.game_started) {
            snowman_game.playLetter(char);
        }
    }
});

// Determines if the given string char is one of the 26 capital letters
function isALetter(char) {
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < letters.length; i++) {
        if (char == letters[i]) {
            return true;
        }
    }
    return false;
}

// Disables or enables the submit button depending on whether or not a word is entered
function verifyWord() {
    var entered_word = document.getElementById('pick_word').value;
    entered_word = entered_word.toUpperCase();
    document.getElementById('pick_word').value = entered_word;
    var good_word = (entered_word.length != 0);
    if (good_word) {
        document.getElementById('submit_word').disabled = false;
    } else {
        document.getElementById('submit_word').disabled = true;
    }
}

function verifyNames() {
    var num_players = document.getElementById('num_players').value;
    if (document.getElementById('p0_name').value == "" || 
        document.getElementById('p0_name').value == null) {
        document.getElementById('submit_players').disabled = true;
    }
    else if (num_players == 2 &&
             (document.getElementById('p1_name').value == "" || 
             document.getElementById('p1_name').value == null) ||
             document.getElementById('p0_name').value == document.getElementById('p1_name').value) {
        document.getElementById('submit_players').disabled = true;
    } else {
        document.getElementById('submit_players').disabled = false;
    }
}

function checkNumPlayers() {
    var num_players = document.getElementById('num_players').value;
    var p1_input = document.querySelector('p1_input');
    if (num_players == 1) {
        p1_input.innerHTML = "";
    } else if (num_players == 2) {
        p1_input.innerHTML = `
            <label for="p1_name" class="subtitle">Player 2 Name (Picks)</label>
            <br>
            <input type="text" id="p1_name" name="p1_name" required placeholder="Joe S." onchange=(verifyNames()) />
        `;
    }
    verifyNames();
}

function beginSnowmanGame() {
    snowman_game.word = document.getElementById('pick_word').value;
    snowman_game.num_letters_left = 0;
    for (var i = 0; i < snowman_game.word.length; i++) {
        if (!isALetter(snowman_game.word[i])) {
            snowman_game.displaying_word.push(snowman_game.word[i] + " ");
        }
        else {
            snowman_game.num_letters_left++;
            snowman_game.displaying_word.push("_ ");
        }
    }
    snowman_game.printGame();
}
var snowman_game = new Snowman();
function playSnowman() {
    var num_players = document.getElementById('num_players').value;
    var p0_name = document.getElementById('p0_name').value;
    var losing_letters = document.getElementById('losing_letters').value;
    if (num_players == 2) {
        var p1_name = document.getElementById('p1_name').value;
    } else {
        var p1_name = null;
    }
    snowman_game.num_players = num_players;
    snowman_game.player0_name = p0_name;
    snowman_game.player1_name = p1_name;
    snowman_game.losing_letters = losing_letters;
    snowman_game.pickWord();
}