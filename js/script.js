import eCPF from "./validar-cpf.js";
import eMaiorDeIdade from "./validar-idade.js";
const inputs = document.querySelectorAll("[required]");


inputs.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo));

})

function verificarCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        eCPF(campo);
    }
    if (campo.name == "data-nascimento" && campo.value != "") {
        eMaiorDeIdade(campo);
    }
}