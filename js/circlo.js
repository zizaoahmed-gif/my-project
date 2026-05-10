// DARK MODE
const btn = document.getElementById("modeToggle");

btn.onclick = () => {
    document.body.classList.toggle("light");

    btn.textContent =
        document.body.classList.contains("light")
            ? "🌙 Dark"
            : "☀️ Light";
};

// LIKE BUTTON
function toggleLike(btn) {

    btn.classList.toggle("liked");

    const count =
        btn.querySelector(".like-count");

    let number = parseInt(count.textContent);

    if (btn.classList.contains("liked")) {

        count.textContent = number + 1;

        btn.querySelector("svg")
            .setAttribute("fill", "currentColor");

    } else {

        count.textContent = number - 1;

        btn.querySelector("svg")
            .setAttribute("fill", "none");
    }
}

// FOLLOW BUTTON
function toggleFollow(btn) {

    btn.classList.toggle("following");

    if (btn.classList.contains("following")) {

        btn.textContent = "Following";

    } else {

        btn.textContent = "Follow";
    }
}

// CREATE POST
function submitPost() {

    const input =
        document.getElementById("postText");

    const text =
        input.value.trim();

    if (text === "") {
        alert("Write something first!");
        return;
    }

    const post =
        document.createElement("div");

    post.className = "post-card";

    post.innerHTML = `

    <div class="post-header">

        <div class="post-user">

            <div class="post-avatar"
            style="background:linear-gradient(135deg,#833ab4,#e1306c);">
                ME
            </div>

            <div>
                <div class="post-name">You</div>
                <div class="post-time">Just now</div>
            </div>

        </div>

    </div>

    <div class="post-body"
    style="padding:14px 16px;">

        <p>
            <strong>You</strong> ${text}
        </p>

    </div>

    <div class="post-actions">

        <button class="action-btn"
        onclick="toggleLike(this)">

            ❤️
            <span class="like-count">0</span>

        </button>

        <button class="action-btn">
            💬 0
        </button>

        <button class="action-btn">
            ↗ Share
        </button>

    </div>

    <div class="post-comment-bar">

        <div class="user-avatar"
        style="width:30px;height:30px;font-size:12px;">
            ME
        </div>

        <input type="text"
        class="comment-input"
        placeholder="Add a comment...">

        <button class="comment-send">
            Post
        </button>

    </div>
    `;

    const createPost =
        document.querySelector(".create-post");

    createPost.insertAdjacentElement(
        "afterend",
        post
    );

    input.value = "";

    post.scrollIntoView({
        behavior: "smooth"
    });
}

// CREATE STORY
const storiesBar =
    document.querySelector(".stories-bar");

const addStory =
    document.querySelector(".story");

addStory.addEventListener("click", createStory);

function createStory() {

    const storyName =
        prompt("Enter story name");

    if (!storyName) return;

    const story =
        document.createElement("div");

    story.className = "story";

    story.innerHTML = `

    <div class="story-ring">

        <div class="story-avatar"
        style="
        background:linear-gradient(135deg,#833ab4,#e1306c);
        color:white;
        ">
            ${storyName.charAt(0).toUpperCase()}
        </div>

    </div>

    <span>${storyName}</span>
    `;

    story.addEventListener("click", () => {

        story.querySelector(".story-ring")
            .classList.add("seen");
    });

    storiesBar.appendChild(story);
}

// COMMENTS
document.addEventListener("click", function (e) {

    if (e.target.classList.contains("comment-send")) {

        const bar =
            e.target.parentElement;

        const input =
            bar.querySelector(".comment-input");

        const text =
            input.value.trim();

        if (text === "") return;

        const post =
            bar.parentElement;

        let comments =
            post.querySelector(".comments-area");

        if (!comments) {

            comments =
                document.createElement("div");

            comments.className =
                "comments-area";

            comments.style.padding =
                "0 16px 14px";

            post.appendChild(comments);
        }

        const p =
            document.createElement("p");

        p.style.marginTop = "8px";

        p.innerHTML =
            `<strong>You:</strong> ${text}`;

        comments.appendChild(p);

        input.value = "";
    }
});