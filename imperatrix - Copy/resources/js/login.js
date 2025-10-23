document.getElementById('loginBtn').addEventListener('click', () => {
  validateLogin();
});

function validateLogin() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value;

    const accs = {
        TrailBlazer: "StelleCaelus123", //buyer account
        CyreneAIW: "PhiLia093" //seller account
    };

    const redirects = {
        TrailBlazer: '/home',
        CyreneAIW: '/seller'
    };

    if ((usernameValue in accs) && (accs[usernameValue] === passwordValue)) {
        usernameInput.style.border = "2px solid green";
        passwordInput.style.border = "2px solid green";
        sessionStorage.setItem("access_granted", "true");
        window.location.href = redirects[usernameValue];
    } else {
        usernameInput.value = "";
        usernameInput.placeholder = "Invalid username or password!";
        usernameInput.style.border = "2px solid red";
        passwordInput.value = "";
        passwordInput.style.border = "2px solid red";
    }
}