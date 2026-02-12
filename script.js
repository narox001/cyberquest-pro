const playBtn = document.getElementById("playBtn");
const errorMessage = document.getElementById("errorMessage");

playBtn.addEventListener("click", () => {
    errorMessage.style.display = "block";
});
