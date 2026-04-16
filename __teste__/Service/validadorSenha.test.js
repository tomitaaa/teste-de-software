const { validarSenha } = require("../../src/service/ValidadorSenha");

describe("Verifcador de Senhas", () => {
  test("não irá aceitar uma senha com menos de 8 caracteres", () => {
    expect(validarSenha("Ab1!")).toBe(false);
  });

  test("não irá aceitar uma senha sem letra maiúscula", () => {
    expect(validarSenha("ifprpvai")).toBe(false);
  });
});
