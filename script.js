let isTeacher = false;
const PASSWORD = "phoenix123";

function login() {
    const pass = prompt("Enter Teacher Password:");
    if (pass === PASSWORD) {
        isTeacher = true;
        alert("Teacher Mode Activated");
        document.querySelectorAll(".teacher-only").forEach(el => el.classList.remove("hidden"));
        document.querySelectorAll("table").forEach(t => t.contentEditable = true);
    } else {
        alert("Wrong Password");
    }
}

/* Assignments */
let assignments = JSON.parse(localStorage.getItem("assignments")) || [];

function renderAssignments() {
    const list = document.getElementById("assignmentList");
    list.innerHTML = "";
    assignments.forEach(a => {
        list.innerHTML += `<div class="glass" style="padding:15px;margin:10px 0;">
            <h4>${a.title}</h4><p>${a.desc}</p></div>`;
    });
}

function addAssignment() {
    const title = assTitle.value;
    const desc = assDesc.value;
    assignments.push({ title, desc });
    localStorage.setItem("assignments", JSON.stringify(assignments));
    renderAssignments();
    assTitle.value = assDesc.value = "";
}

renderAssignments();

/* Gallery */
function uploadImage(e) {
    const reader = new FileReader();
    reader.onload = () => {
        const imgs = JSON.parse(localStorage.getItem("gallery")) || [];
        imgs.push(reader.result);
        localStorage.setItem("gallery", JSON.stringify(imgs));
        renderGallery();
    };
    reader.readAsDataURL(e.target.files[0]);
}

function renderGallery() {
    const g = document.getElementById("galleryContainer");
    const imgs = JSON.parse(localStorage.getItem("gallery")) || [];
    g.innerHTML = "";
    imgs.forEach(i => g.innerHTML += `<img src="${i}">`);
}

renderGallery();