class Hangman {
    num_players;
    player0_name;
    player1_name;
    word = "";
    wrong_letters = [];
    displaying_word = [];
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
                 "I GUESS THEY'LL NEVER KNOW",
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
        var hangmanHTML = document.querySelector('hangman');
        if (this.num_players == 2) {
            hangmanHTML.innerHTML = `
            <ul>
                <li>
                    <h2 class="subtitle">${this.player0_name}, avert your eyes!</h2>
                    <label for="pick_word" class="subtitle">${this.player1_name}, pick something for ${this.player0_name} to guess</label>
                    <br>
                    <input type="text" id="pick_word" name="pick_word" required onchange=(verifyWord()) />
                </li>
                <li>
                    <button class="submit_button" id="submit_word" onclick=(beginHangmanGame()) disabled>Submit</button>
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
        var hangmanHTML = document.querySelector('hangman');
        var stickman_svg = `
            <img src="../images/hangman-${this.wrong_letters.length}.svg" width="300" height="500" alt="Hangman game"/>
        `;
        hangmanHTML.innerHTML = stickman_svg;
        hangmanHTML.innerHTML += `<pre><p class="bodyText">${this.updateDisplayWord()}</p></pre>`;
        hangmanHTML.innerHTML += `<pre><p class="bodyText">Wrong letters: ${this.updateUsedLetters()}</p></pre>`;

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
        if (this.wrong_letters.length >= 6) {
            var hangmanHTML = document.querySelector('hangman');
            var losing_message;
            if (this.num_players == 2) {
                losing_message = this.player1_name + " wins!";
            } else {
                losing_message = "You lost!";
            }
            hangmanHTML.innerHTML = `
            <img src="../images/hangman-6.svg" width="300" height="500" alt="Hangman game"/>
            <h2 class="subtitle">${losing_message}</h2>
            <a href="" class="game_link"><h2 class="subtitle">Click here to play again</h2></a>
            `;
            this.game_started = false;
        }
        else if (this.num_letters_left == 0) {
            var hangmanHTML = document.querySelector('hangman');
            var winning_message;
            if (this.num_players == 2) {
                winning_message = this.player0_name + " wins!";
            } else {
                winning_message = "You won!"
            }
            hangmanHTML.innerHTML = `
            <img src="../images/hangman-${this.wrong_letters.length}.svg" width="300" height="500" alt="Hangman game"/>
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
    if (e.code == "KeyA" ||
        e.code == "KeyB" ||
        e.code == "KeyC" ||
        e.code == "KeyD" ||
        e.code == "KeyE" ||
        e.code == "KeyF" ||
        e.code == "KeyG" ||
        e.code == "KeyH" ||
        e.code == "KeyI" ||
        e.code == "KeyJ" ||
        e.code == "KeyK" ||
        e.code == "KeyL" ||
        e.code == "KeyM" ||
        e.code == "KeyN" ||
        e.code == "KeyO" ||
        e.code == "KeyP" ||
        e.code == "KeyQ" ||
        e.code == "KeyR" ||
        e.code == "KeyS" ||
        e.code == "KeyT" ||
        e.code == "KeyU" ||
        e.code == "KeyV" ||
        e.code == "KeyW" ||
        e.code == "KeyX" ||
        e.code == "KeyY" ||
        e.code == "KeyZ") {
        var char = e.code.slice(3);
        if (hangman_game.game_started) {
            hangman_game.playLetter(char);
        }
    }
});


function isALetter(char) {
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < letters.length; i++) {
        if (char == letters[i]) {
            return true;
        }
    }
    return false;
}

function verifyWord() {
    var entered_word = document.getElementById('pick_word').value;
    entered_word = entered_word.toUpperCase();
    document.getElementById('pick_word').value = entered_word;
    var good_word = true;
    if (entered_word.length == 0) {
        good_word = false;
    }
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
             document.getElementById('p1_name').value == null)) {
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

function beginHangmanGame() {
    hangman_game.word = document.getElementById('pick_word').value;
    hangman_game.num_letters_left = 0;
    for (var i = 0; i < hangman_game.word.length; i++) {
        if (!isALetter(hangman_game.word[i])) {
            hangman_game.displaying_word.push(hangman_game.word[i] + " ");
        }
        else {
            hangman_game.num_letters_left++;
            hangman_game.displaying_word.push("_ ");
        }
    }
    hangman_game.printGame();
}
var hangman_game = new Hangman();
function playHangman() {
    var num_players = document.getElementById('num_players').value;
    var p0_name = document.getElementById('p0_name').value;
    if (num_players == 2) {
        var p1_name = document.getElementById('p1_name').value;
    } else {
        var p1_name = null;
    }
    hangman_game.num_players = num_players;
    hangman_game.player0_name = p0_name;
    hangman_game.player1_name = p1_name;
    hangman_game.pickWord();
}