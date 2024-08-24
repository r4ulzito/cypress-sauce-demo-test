describe("Ao acessar a página de login", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Deve efetuar login com sucesso utilizando usuário padrão", () => {
        const endpointPagina = "/inventory.html";
        const tituloPagina = "Products";

        cy.efetuaLogin();

        cy.url().should("eq", Cypress.config("baseUrl") + endpointPagina);
        cy.get("span[data-test='title']")
            .should("be.visible")
            .and("have.text", tituloPagina);
    });
});
