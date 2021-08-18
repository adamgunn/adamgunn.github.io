var issues = {username_chars: false,
              username_length: false,
              password_length: false,
              password_matching: false,
              pfp_ratio: false,
              pfp_filesize: false,
              pfp_imgsize: false};

function greySubmit() {
    document.querySelector('submit_signup_form').innerHTML = `
    <button class="submit_button" id="signup-submit" type="submit" disabled>
        Submit
    </button>
    ` ;
}

function unGreySubmit() {
    document.querySelector('submit_signup_form').innerHTML = `
    <button class="submit_button" id="signup-submit" type="submit">
        Submit
    </button>
    ` ;
}

function validateForm() {
    if (pwdValid() && result && usernameValid()) {
        unGreySubmit();
    }
    else {
        greySubmit();
    } 
    updateIssuesHTML();
}

function updateIssuesHTML() {
    var inner_HTML = "";
    if (issues["password_length"]) {
        inner_HTML += `
        <p class="bodyText">Password must be between 8 and 16 characters.</p>
        `;
    }
    if (issues["password_matching"]) {
        inner_HTML += `
        <p class="bodyText">Passwords must match.</p>
        `;
    }
    if (issues["pfp_filesize"]) {
        inner_HTML += `
        <p class="bodyText">Profile picture must be 4MB or smaller.</p>
        `;
    }
    if (issues["pfp_imgsize"]) {
        inner_HTML += `
        <p class="bodyText">Profile picture must be 400x400 or smaller.</p>
        `;
    }
    if (issues["pfp_ratio"]) {
        inner_HTML += `
        <p class="bodyText">Profile picture must be a square image.</p>
        `;
    }
    if (issues["username_chars"]) {
        inner_HTML += `
        <p class="bodyText">Username may only consist of lowercase letters, numbers, periods, and/or underscores.</p>
        `;
    }
    if (issues["username_length"]) {
        inner_HTML += `
        <p class="bodyText">Username must be between 3 and 30 characters.</p>
        `;
    }
    document.querySelector('form_issues').innerHTML = inner_HTML;
}

var result = true;

function uploadCheck() {
    var fileUpload = document.getElementById("pfp_upload");
    var value = document.forms["signup_form"]["pfp"].value;
    var too_big = false;
    if (value == null || value == "") {
        if (pwdValid() && usernameValid()) {
            unGreySubmit();
        }
        issues["pfp_filesize"] = issues["pfp_imgsize"] = issues["pfp_ratio"] = false;
        updateIssuesHTML();
    } else {
        if (fileUpload.files[0].size / 1048576 > 4) {
            greySubmit();
            too_big = true;
        }
        issues["pfp_filesize"] = too_big;
        var reader = new FileReader();
        reader.readAsDataURL(fileUpload.files[0]);
        reader.onload = function (e) {
            var image = new Image();
            image.src = e.target.result;
            image.onload = function () {
                issues["pfp_imgsize"] = (this.height > 400 || this.width > 400);
                issues["pfp_ratio"] = (this.height != this.width);
                result = (!issues["pfp_imgsize"] && !issues["pfp_ratio"]);
                if (result && pwdValid() && usernameValid()) {
                    unGreySubmit();
                } else {
                    greySubmit();
                }
                updateIssuesHTML();
            }
        }
    }
}

function validChar(char) {
    var ok_chars = "abcdefghijklmnopqrstuvwxyz1234567890_.";
    for (var i = 0; i < ok_chars.length; i++) {
        if (char == ok_chars[i]) {
            return true;
        }
    }
    return false;
}

function usernameValid() {
    var username = document.forms["signup_form"]["username"].value;
    if (username.length > 30 || username.length < 3) {
        issues['username_length'] = true;
        return false;
    }
    issues['username_length'] = false;
    for (var i = 0; i < username.length; i++) {
        if (!validChar(username[i])) {
            issues['username_chars'] = true;
            return false;
        }
    }
    issues['username_chars'] = false;
    return true;
}

// function uploadCheck() {
//     console.log('checking image');
//     if (verifyImageUpload() && pwdValid()) {
//         document.querySelector('submit_signup_form').innerHTML = `
//         <button class="submit_button" id="signup-submit" type="submit">
//             Submit
//         </button>
//         ` ;
//     } else {
//         document.querySelector('submit_signup_form').innerHTML = `
//         <button class="submit_button" id="signup-submit" type="submit" disabled>
//             Submit
//         </button>
//         ` ;
//     }
// }

function pwdValid() {
    var pwd_input = document.getElementById('password_input');
    var conf_input = document.getElementById('password_input_confirm');
    issues["password_length"] = (pwd_input.value.length < 8 || 
                                 pwd_input.value.length > 16);
    issues["password_matching"] = (pwd_input.value != conf_input.value);
    return (!issues["password_length"] && !issues["password_matching"]);
}