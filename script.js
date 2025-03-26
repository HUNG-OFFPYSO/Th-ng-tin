function showSection(sectionId) {
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Trang web đã tải!");
});
