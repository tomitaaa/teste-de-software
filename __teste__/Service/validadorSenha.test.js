const { validarSenha } = require("../../src/service/ValidadorSenha");

describe("Verifcador de Senhas", () => {
  test("nao ira aceitar uma senha com menos de 8 caracteres", () => {
    expect(validarSenha("Ab1!")).toBe(false);
  });

  test("nao ira aceitar uma senha sem letra maiuscula", () => {
    expect(validarSenha("ifprpvai!")).toBe(false);
  });
  test("nao ira aceitar senha sem letra minuscula", () => {
  expect(validarSenha("IFPRPVAI!!")).toBe(false);
});
test("deve rejeitar senha sem número", () => {
  expect(validarSenha("Ifprpvai!")).toBe(false);
});

});
