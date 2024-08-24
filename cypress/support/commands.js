Cypress.Commands.add(
    "efetuaLogin",
    (
        login = Cypress.env("usuarios").usuario_padrao.login,
        senha = Cypress.env("usuarios").usuario_padrao.senha
    ) => {
        cy.get("input[data-test='username']").should("be.visible").type(login);
        cy.get("input[data-test='password']").should("be.visible").type(senha);
        cy.get("input[data-test='login-button'][type='submit']")
            .should("be.visible")
            .click();
    }
);

Cypress.Commands.add("adicionaItemCarrinho", (nomeProduto) => {
    cy.get("div[data-test='inventory-item']").each((item) => {
        if (item[0].innerText.includes(nomeProduto)) {
            cy.wrap(item).find("button").click();
        }
    });
});

Cypress.Commands.add("efetuaCheckout", ({ nome, sobrenome, cep }) => {
    cy.get("button[data-test='checkout']").should("be.visible").click();
    cy.get("input[data-test='firstName']").should("be.visible").type(nome);
    cy.get("input[data-test='lastName']").should("be.visible").type(sobrenome);
    cy.get("input[data-test='postalCode']").should("be.visible").type(cep);
    cy.get("input[data-test='continue']").should("be.visible").click();
});

Cypress.Commands.add("finalizaCompra", () => {
    const endpointCompraFinalizada = "/checkout-complete.html";

    cy.get("button[data-test='finish']").should("be.visible").click();
    cy.url().should("eq", Cypress.config("baseUrl") + endpointCompraFinalizada);
    cy.contains("Thank you for your order!").should("be.visible");
});
