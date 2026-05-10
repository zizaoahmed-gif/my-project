// ================= SIGNUP =================

const signupForm = document.querySelector(".signup");

signupForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const firstName = document.querySelectorAll(".name input")[0].value;
    const lastName = document.querySelectorAll(".name input")[1].value;

    const day = document.querySelectorAll(".birthdate input")[0].value;
    const month = document.querySelectorAll(".birthdate input")[1].value;
    const year = document.querySelectorAll(".birthdate input")[2].value;

    const gender = document.querySelector("select").value;

    const email = document.querySelector(".email input").value;

    const password = document.querySelector(".password input").value;

    // Validation
    if (password.length < 6) {
        showMessage("Password must be at least 6 characters", "error");
        return;
    }

    // User Object
    const user = {
        firstName,
        lastName,
        birthdate: `${day}/${month}/${year}`,
        gender,
        email,
        password,
        username: firstName.toLowerCase() + "_" + Math.floor(Math.random() * 9999),
        followers: 0,
        following: 0,
        posts: []
    };

    // Save User
    localStorage.setItem("circloUser", JSON.stringify(user));

    showMessage("Account Created Successfully ✔", "success");

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);

});


// ================= MESSAGE =================

function showMessage(text, type) {

    let oldMsg = document.querySelector(".msg");

    if (oldMsg) oldMsg.remove();

    const msg = document.createElement("div");

    msg.className = `msg ${type}`;

    msg.innerText = text;

    document.body.appendChild(msg);

    setTimeout(() => {
        msg.remove();
    }, 3000);
}