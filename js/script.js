import eCPF from "./validar-cpf.js";
import eMaiorDeIdade from "./validar-idade.js";
const inputs = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "cpf": e.target.elements["cpf"].value,
        "nascimento": e.target.elements["nascimento"].value,
        "senha": e.target.elements["senha"].value,
        "confirma": e.target.elements["confirma"].value,
    }
    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    window.location.href = './sucesso.html';
})

inputs.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());

})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio",
        patternMismatch: "Por favor, preencha um nome válido",
        tooShort: "Por favor, preencha um nome válido"
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio",
        typeMismatch: "Por favor, preencha um email válido",
        tooShort: "Por favor, preencha um e-mail válido"
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio',
        patternMismatch: "Por favor, preencha um CPF válido",
        customError: "O CPF digitado não existe",
        tooShort: "O campo de CPF não tem caractéres suficientes"
    },
    nascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio',
        customError: 'Você deve ter mais de 18 anos para se cadastrar'
    },
    senha: {
        valueMissing: 'A senha não pode estar vazia',
        tooShort: "A senha tem que ter no mínimo 6 caracteres",
    },
    confirma: {
        valueMissing: 'A confirmação de senha não pode estar vazia',
        tooShort: "A confirmação de senha tem que ter no mínimo 6 caracteres",
    },
    checkbox: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar',
    },
    concluir: {
        valueMissing: 'Você deve preencher todos os campos',

    }
}

function verificarCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');

    if (campo.name == "cpf" && campo.value.length >= 11) {
        eCPF(campo);
    }
    if (campo.name == "nascimento" && campo.value != "") {
        eMaiorDeIdade(campo);
    }


    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro]
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();
    
    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
        
    } else {
        mensagemErro.textContent = "";
    }

}
