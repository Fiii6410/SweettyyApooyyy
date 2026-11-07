
function toggleLetter() {
    const letter = document.getElementById("letterText");

    if (letter.style.display === "none") {
        letter.style.display = "block";
    } else {
        letter.style.display = "none";
    }
}

// Animasi hati dan bunga beterbangan
const decorations = ["❤️", "💕", "🌸", "🌷", "💗", "✨", "🦋"];

function createDecoration() {
    const item = document.createElement("div");

    item.className = "decor";
    item.innerHTML = decorations[
        Math.floor(Math.random() * decorations.length)
    ];

    item.style.left = Math.random() * 100 + "vw";
    item.style.fontSize = (15 + Math.random() * 20) + "px";
    item.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 10000);
}

setInterval(createDecoration, 700);
