const nameInput = document.getElementById("nameInput");
const classSelect = document.getElementById("classSelect");
const force = document.getElementById("force");
const agility = document.getElementById("agility");
const intelligence = document.getElementById("intelligence");
const statsDisplay = document.getElementById("statsDisplay");
const saveBtn = document.getElementById("saveBtn");
const playBtn = document.getElementById("playBtn");
const errorMessage = document.getElementById("errorMessage");

// Mise à jour des stats
function updateStats() {
    statsDisplay.innerHTML =
        "Force: " + force.value +
        " | Agilité: " + agility.value +
        " | Intelligence: " + intelligence.value;
}

force.addEventListener("input", updateStats);
agility.addEventListener("input", updateStats);
intelligence.addEventListener("input", updateStats);

updateStats();

// Sauvegarde
saveBtn.addEventListener("click", () => {
    const character = {
        name: nameInput.value,
        class: classSelect.value,
        force: force.value,
        agility: agility.value,
        intelligence: intelligence.value
    };

    localStorage.setItem("cyberCharacter", JSON.stringify(character));
    alert("Personnage sauvegardé !");
});

// Bouton jouer → erreur
playBtn.addEventListener("click", () => {
    errorMessage.style.display = "block";
});

