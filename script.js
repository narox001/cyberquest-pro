let selectedCharacter = null;

function startLoading() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("loading").classList.remove("hidden");

    let progress = document.querySelector(".progress");
    let width = 0;

    let interval = setInterval(() => {
        width += 4;
        progress.style.width = width + "%";

        if (width >= 100) {
            clearInterval(interval);
            document.getElementById("loading").classList.add("hidden");
            document.getElementById("menu").classList.remove("hidden");
        }
    }, 120);
}

function selectCharacter(element) {
    document.querySelectorAll(".character").forEach(char => {
        char.classList.remove("selected");
    });

    element.classList.add("selected");
    selectedCharacter = element.textContent;
}

function playGame() {
    if (!selectedCharacter) {
        document.getElementById("errorMessage").textContent =
            "⚠️ Sélectionne un personnage.";
        return;
    }

    document.getElementById("menu").classList.add("hidden");
    document.getElementById("crash").classList.remove("hidden");
}
