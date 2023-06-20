import eCPF from "../js/validar-cpf.js";
const inputs = document.querySelectorAll("[required]");

inputs.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo));

})

function verificarCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        eCPF(campo);

    }
}