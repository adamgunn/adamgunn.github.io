document.addEventListener('keyup', () => {
    if (formValid()) {
        document.querySelector('submit_signup_form').innerHTML = `
        <button class="submit_button" id="signup-submit" type="submit">
            Submit
        </button>
        ` ;
    }
    else {
        document.querySelector('submit_signup_form').innerHTML = `
        <p class="bodyText">
            Waiting for you to type in a valid password...
        </p>
        ` ;
    }
});

function formValid() {
    return (document.getElementById('password_input').value == document.getElementById('password_input_confirm').value &&
            document.getElementById('password_input').value.length >= 8 && document.getElementById('password_input').value.length <= 16 &&
            document.getElementById('password_input_confirm').value.length >= 8 && document.getElementById('password_input_confirm').value.length <= 16);
}