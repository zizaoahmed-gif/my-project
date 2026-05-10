// ==========================
// Messages Page
// file: js/messages.js
// ==========================

// العناصر
let input = document.querySelector(".input-area input");
let sendBtn = document.querySelector(".send");
let messagesBox = document.querySelector(".messages");

// تحميل الرسائل القديمة
window.onload = function () {

    let savedMessages = localStorage.getItem("messages");

    if (savedMessages) {
        messagesBox.innerHTML = savedMessages;
    }
};

// ارسال رسالة
function sendMessage() {

    let text = input.value.trim();

    // لو فاضي
    if (text === "") return;

    // انشاء الرسالة
    let message = document.createElement("div");

    message.classList.add("message");
    message.classList.add("right");

    message.innerHTML = text;

    // اضافتها للشات
    messagesBox.appendChild(message);

    // حفظ الرسائل
    localStorage.setItem("messages", messagesBox.innerHTML);

    // نزول لاخر رسالة
    messagesBox.scrollTop = messagesBox.scrollHeight;

    // تفريغ الانبوت
    input.value = "";
}

// عند الضغط على زرار الارسال
sendBtn.addEventListener("click", sendMessage);

// Enter يشتغل
input.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
        sendMessage();
    }
});

// ==========================
// Fake Auto Reply
// ==========================

let replies = [
    "😂😂😂",
    "تمام 🔥",
    "فينك؟",
    "هههه 😎",
    "مشغول دلوقتي",
    "عايز ايه 👀",
    "❤️"
];

function autoReply() {

    let reply = document.createElement("div");

    reply.classList.add("message");
    reply.classList.add("left");

    // رسالة عشوائية
    let randomReply =
        replies[Math.floor(Math.random() * replies.length)];

    reply.innerHTML = randomReply;

    messagesBox.appendChild(reply);

    // حفظ
    localStorage.setItem("messages", messagesBox.innerHTML);

    // Scroll
    messagesBox.scrollTop = messagesBox.scrollHeight;
}

// رد تلقائي بعد الارسال
sendBtn.addEventListener("click", function () {

    if (input.value.trim() !== "") {

        setTimeout(autoReply, 1000);
    }
});