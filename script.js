// Mobile menu
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

// Task button
function completeTask(button) {
    button.innerText = "✓ Done";
    button.style.background = "#6957d9";
    button.style.color = "white";
    button.parentElement.style.opacity = "0.6";
}

// Contact form
function sendMessage(event) {
    event.preventDefault();

    document.getElementById("message").innerText =
        "✓ Thanks! Your message has been received.";

    event.target.reset();
}

// Page loading animation
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});