const Usuario = require("../../src/model/usuario").Usuario;
const Livro = require("../../src/model/Livro").Livro;
const ServicoEmprestimo =
  require("../../src/service/ServicoEmprestimo").ServicoEmprestimo;
const { constants } = require("../../util/constants");
const { mensagens } = require("../../util/mensagens");
const casos = require("../dados/emprestimo.json");

describe("emprestimo", () => {
  test("testa usuário e livro válido", () => {
    //Arranje
    const usuario = new Usuario({
      id: 1,
      nome: "João",
      ativo: true,
      emprestimosAtivos: constants.USUARIO_LIMITE_EMPRESTIMOS + 1,
      multaPendente: 5,
    });
    const livro = new Livro({
      id: 1,
      titulo: "Livro",
      disponivel: true,
    });
    //Act
    const saida = ServicoEmprestimo.autorizarEmprestimo(usuario, livro);

    //Assert
    expect(true).toBe(saida);
  });

  test("testa usuário e livro inválido", () => {
    //Arranje
    const usuario = new Usuario({
      id: 1,
      nome: "João",
      ativo: false,
      emprestimosAtivos: 2,
      multaPendente: 20,
    });
    const livro = new Livro({
      id: 1,
      titulo: "Livro",
      disponivel: true,
    });
    //Act
    const saida = ServicoEmprestimo.autorizarEmprestimo(usuario, livro);

    //Assert
    expect(false).toBe(saida);
  });

  test("testa usuário e livro válido", () => {
    //Arranje
    const usuario = new Usuario({
      id: 1,
      nome: "João",
      ativo: true,
      emprestimosAtivos: constants.USUARIO_LIMITE_EMPRESTIMOS + 1,
      multaPendente: 5,
    });
    const livro = new Livro({
      id: 1,
      titulo: "Livro",
      disponivel: false,
    });
    //Act
    expect(() => ServicoEmprestimo.autorizarEmprestimo(usuario, livro)).toThrow(
      mensagens.LIVRO_INDISPONIVEL
    );

    //Assert
  });
  test.each(casos)("$descricao", (caso) => {
    //Arranje
    const usuario = new Usuario({
      id: 1,
      nome: "João",
      ativo: caso.ativo,
      emprestimosAtivos: caso.emprestimosAtivos,
      multaPendente: caso.multaPendente,
    });
    const livro = new Livro({
      id: 1,
      titulo: "Narnia teste teste",
      disponivel: caso.livroDisponivel,
    });
    //Act
   // const saida = ServicoEmprestimo.autorizarEmprestimo(usuario, livro);

    //Assert
    if(caso.livroDisponivel == true){
    expect(caso.saida).toBe(saida);   
    }
    else //Act
    expect(() => ServicoEmprestimo.autorizarEmprestimo(usuario, livro)).toThrow(
      mensagens.LIVRO_INDISPONIVEL);
   
  });
});
