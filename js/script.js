const inputs = document.querySelectorAll("[required]");

inputs.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo));

});

function verifcarCampo(campo) {
  
}