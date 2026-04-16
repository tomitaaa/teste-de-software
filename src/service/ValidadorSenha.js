function validarSenha(senha) {
  if (senha.length < 8) return false;
  if (senha.includes(" ")) return false;

  const temMaiuscula = /[A-Z]/.test(senha);
  const temMinuscula = /[a-z]/.test(senha);
  const temNumero = /[0-9]/.test(senha);
  const temEspecial = /[!@#$%^&*]/.test(senha);

  return temMaiuscula && temMinuscula && temNumero && temEspecial;
}
module.exports = { validarSenha };
