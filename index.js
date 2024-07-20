function validacionForm() {
    let x = document.forms["myForm"];
    let elements = x.elements;
    let errorMessage = document.getElementById("error-message");
    let successMessage = document.getElementById("success-message");

    errorMessage.style.display = "none"; // Oculta el mensaje de error
    successMessage.style.display = "none"; // Oculta el mensaje de éxito

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].type === "text" || elements[i].type === "email" || elements[i].type === "textarea") {
            if (elements[i].value === "") {
                errorMessage.innerText = "Por favor, ingrese el " + elements[i].name;
                errorMessage.style.display = "block";
                elements[i].focus();
                return false;
            }
        }
    }
    successMessage.innerText = "Todos los campos han sido completados correctamente.";
    successMessage.style.display = "block";
    return true; // Significa que los campos están llenos
}