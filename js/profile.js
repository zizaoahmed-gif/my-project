// ==========================
// Profile Page
// file: js/profile.js
// ==========================

// ==========================
// تحميل بيانات اليوزر
// ==========================

window.onload = function () {

    // الاسم
    let savedName = localStorage.getItem("username");

    if (savedName) {
        document.querySelector(".bio h2").innerHTML = savedName;
    }

    // البايو
    let savedBio = localStorage.getItem("bio");

    if (savedBio) {
        document.querySelector(".bio p").innerHTML = savedBio;
    }

    // الصورة
    let savedImage = localStorage.getItem("profileImage");

    if (savedImage) {

        // صورة البروفايل
        document.querySelector(".bio img").src = savedImage;

        // صورة الكوفر
        document.querySelector("body > div img").src = savedImage;
    }

    // تاريخ الميلاد
    let savedBirthday = localStorage.getItem("birthday");

    if (savedBirthday) {

        document.querySelector(
            ".personal-details p"
        ).innerHTML =
            "<strong>Date of birth:</strong> " + savedBirthday;
    }
};

// ==========================
// نظام اللايك
// ==========================

let likeButtons = document.querySelectorAll(".like input");

likeButtons.forEach(function (btn, index) {

    // تحميل حالة اللايك
    let liked = localStorage.getItem("liked" + index);

    if (liked === "true") {
        btn.value = "Liked ❤️";
    }

    btn.addEventListener("click", function () {

        if (btn.value === "Like") {

            btn.value = "Liked ❤️";

            localStorage.setItem("liked" + index, true);

        } else {

            btn.value = "Like";

            localStorage.setItem("liked" + index, false);
        }
    });
});

// ==========================
// التعليقات
// ==========================

let commentButtons = document.querySelectorAll(".comment button");

commentButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

        let commentBox =
            button.previousElementSibling;

        let text = commentBox.value.trim();

        if (text === "") return;

        // انشاء التعليق
        let comment = document.createElement("p");

        comment.innerHTML = "💬 " + text;

        // اضافته تحت البوست
        button.parentElement.appendChild(comment);

        // حفظ التعليق
        localStorage.setItem(
            "comment" + index,
            comment.outerHTML
        );

        // تفريغ الانبوت
        commentBox.value = "";
    });

    // تحميل التعليق القديم
    let oldComment =
        localStorage.getItem("comment" + index);

    if (oldComment) {

        button.parentElement.innerHTML += oldComment;
    }
});