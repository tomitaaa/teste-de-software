const { validarSenha } = require("../../src/service/ValidadorSenha");

describe("Verifcador de Senhas", () => {

  test("não irá aceitar uma senha com menos de 8 caracteres", () => {
    expect(validarSenha("Ab1!")).toBe(false);
  });

});