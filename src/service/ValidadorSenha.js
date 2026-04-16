function validarSenha(senha) {
  if (senha.length < 8) return false;

  const temMaiuscula = /[A-Z]/.test(senha);
  const temMinuscula = /[a-z]/.test(senha);

  return temMaiuscula && temMinuscula;
}
module.exports = { validarSenha };
