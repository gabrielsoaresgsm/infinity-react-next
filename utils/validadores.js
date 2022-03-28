const validarNome = (nome) => {
    return nome?.toString().length >2; // (?) Verifica se o nome existe e se é maior que 2 caracteres
}

const validarEmail = (email) => {
    const emailStr = email?.toString();
    return email?.length >= 5 && emailStr.includes('@') && emailStr.includes('.');
}

const validarSenha = (senha) => {
    return senha?.toString().length > 3;
}

const validarConfirmacaoSenha = (senha, confirmacao) => {
    return validarSenha(senha) && senha === confirmacao;

}

export {
    validarNome,
    validarEmail,
    validarSenha,
    validarConfirmacaoSenha
}