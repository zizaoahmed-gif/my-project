// ===========================
// Profile Settings Page
// file: js/setting.js
// ===========================

// العناصر
let bioInput = document.querySelector("textarea");
let birthdayInput = document.querySelector('input[type="date"]');
let saveBtn = document.querySelector(".save-btn");
let preview = document.getElementById("preview");

// تحميل البيانات المحفوظة
window.onload = function () {

    let savedBio = localStorage.getItem("bio");
    let savedBirthday = localStorage.getItem("birthday");
    let savedImage = localStorage.getItem("profileImage");

    if (savedBio) {
        bioInput.value = savedBio;
    }

    if (savedBirthday) {
        birthdayInput.value = savedBirthday;
    }

    if (savedImage) {
        preview.src = savedImage;
    }
};

// حفظ الصورة
function previewImage(event) {

    let file = event.target.files[0];

    if (file) {

        let reader = new FileReader();

        reader.onload = function () {

            preview.src = reader.result;

            // حفظ الصورة
            localStorage.setItem("profileImage", reader.result);
        };

        reader.readAsDataURL(file);
    }
}

// حفظ البيانات
saveBtn.addEventListener("click", function () {

    let bio = bioInput.value.trim();
    let birthday = birthdayInput.value;

    localStorage.setItem("bio", bio);
    localStorage.setItem("birthday", birthday);

    alert("Profile Updated Successfully");
});