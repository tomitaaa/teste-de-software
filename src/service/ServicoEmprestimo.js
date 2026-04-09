const { constants } = require("../../util/constants");

class ServicoEmprestimo {
  static autorizarEmprestimo(usuario, livro) {
    return this.validarUsuario(usuario) && this.validarLivro(livro);
  }
  static validarUsuario(usuario) {
    if (!usuario.ativo) return false;
    if (usuario.emprestimoAtivos >= constants.USUARIO_LIMITE_EMPRESTIMOS)
      return false;
    if (usuario.multaPendente >= constants.USUARIO_LIMITE_MULTA) return false;

    return true;
  }
  static validarLivro(livro) {
    if (!livro.disponivel) throw new Error("livro indisponível");
    return true;
  }
}
module.exports = { ServicoEmprestimo };
