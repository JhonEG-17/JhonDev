document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleDarkMode");
    const body = document.body;

    // Comprobar si hay un modo almacenado
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.classList.replace("btn-dark", "btn-light");
        toggleButton.textContent = "☀️ Modo Claro";
    }

    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            toggleButton.classList.replace("btn-light", "btn-dark");
            toggleButton.textContent = "🌙 Modo Oscuro";
            localStorage.setItem("dark-mode", "disabled");
        } else {
            body.classList.add("dark-mode");
            toggleButton.classList.replace("btn-dark", "btn-light");
            toggleButton.textContent = "☀️ Modo Claro";
            localStorage.setItem("dark-mode", "enabled");
        }
    });
});