document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleDarkMode");
    const body = document.body;

    // Comprobar si hay un modo almacenado
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.classList.replace("btn-dark", "btn-light");
        toggleButton.textContent = "☀️";
    }

    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            toggleButton.classList.replace("btn-light", "btn-dark");
            toggleButton.textContent = "🌙";
            localStorage.setItem("dark-mode", "disabled");
        } else {
            body.classList.add("dark-mode");
            toggleButton.classList.replace("btn-dark", "btn-light");
            toggleButton.textContent = "☀️";
            localStorage.setItem("dark-mode", "enabled");
        }
    });
});

//Formulario section

document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault(); // Evita el envío por defecto del formulario

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    try {
        const response = await fetch("https://jegdevstudios.onrender.com", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        alert("Error al enviar el mensaje.");
    }
});
