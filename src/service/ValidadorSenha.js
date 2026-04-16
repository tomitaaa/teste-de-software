function validarSenha(senha) {
  if (senha.length < 8) return false;

  const temMaiuscula = /[A-Z]/.test(senha);

  return temMaiuscula;
}
module.exports = { validarSenha };
