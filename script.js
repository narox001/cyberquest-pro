body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    overflow: hidden;
    color: white;
}

/* Background image GTA */
.background {
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: url("gta-bg.jpg");
    background-size: cover;
    background-position: center;
    filter: brightness(0.5);
    z-index: -1;
}

/* Hidden */
.hidden {
    display: none;
}

/* Center screens */
#intro, #loading, #menu, #crash {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

/* Logo animation */
.logo {
    font-size: 50px;
    letter-spacing: 4px;
    animation: glow 2s infinite alternate;
}

@keyframes glow {
    from {
        text-shadow: 0 0 10px #ff00ff;
    }
    to {
        text-shadow: 0 0 20px #00ffff, 0 0 40px #ff00ff;
    }
}

button {
    padding: 15px 40px;
    font-size: 18px;
    background: #ff007f;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    transition: 0.3s;
}

button:hover {
    transform: scale(1.1);
}

/* Loading bar */
.progress-bar {
    width: 400px;
    height: 20px;
    background: #222;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 20px;
}

.progress {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #ff00ff, #00ffff);
}

/* Characters */
.characters {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
}

.character {
    font-size: 50px;
    cursor: pointer;
    transition: 0.3s;
}

.character:hover {
    transform: scale(1.2);
}

.character.selected {
    border: 3px solid #ff00ff;
    border-radius: 10px;
    padding: 5px;
}

/* Crash screen */
#crash {
    background: black;
    width: 100%;
    height: 100%;
    padding-top: 200px;
}
