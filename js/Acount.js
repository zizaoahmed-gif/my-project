// ===========================
// Account Settings Page
// file: js/account.js
// ===========================

// العناصر
let nameInput = document.getElementById("nameInput");
let emailInput = document.querySelector('input[type="email"]');
let passwordInput = document.querySelector('input[type="password"]');
let saveBtn = document.querySelector("button");

// تحميل البيانات القديمة
window.onload = function () {
    let savedName = localStorage.getItem("username");
    let savedEmail = localStorage.getItem("email");

    if (savedName) {
        nameInput.value = savedName;
    }

    if (savedEmail) {
        emailInput.value = savedEmail;
    }
};

// حفظ البيانات
saveBtn.addEventListener("click", function () {

    let username = nameInput.value.trim();
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();

    if (username === "" || email === "") {
        alert("Please fill all fields");
        return;
    }

    // حفظ في LocalStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);

    // لو كتب باسورد جديد
    if (password !== "") {
        localStorage.setItem("password", password);
    }

    alert("Account Updated Successfully");
});