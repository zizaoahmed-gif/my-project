// ================= LOGIN =================

const loginForm = document.querySelector(".login");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.querySelector('input[type="email"]').value;

    const password = document.querySelector('input[type="password"]').value;

    const savedUser = JSON.parse(localStorage.getItem("circloUser"));

    // لو مفيش اكونت
    if (!savedUser) {

        showMessage("No account found", "error");

        return;
    }

    // التحقق
    if (
        email === savedUser.email &&
        password === savedUser.password
    ) {

        // Save Login Session
        localStorage.setItem("loggedIn", "true");

        showMessage(`Welcome ${savedUser.firstName} 👋`, "success");

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);

    } else {

        showMessage("Wrong Email or Password", "error");
    }

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