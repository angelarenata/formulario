export default function eMaiorDeIdade(campo) {
    const dataDeNascimento = new Date(campo.value);
    validarIdade(dataDeNascimento);

}

function validarIdade(data) {
    const dataAtual = new Date();
    const dataMaiorIdade = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMaiorIdade;
}