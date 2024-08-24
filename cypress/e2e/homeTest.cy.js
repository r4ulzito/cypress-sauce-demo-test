describe("Ao acessar a página inicial da aplicação", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.efetuaLogin();
    });

    it("Deve adicionar item ao carrinho com sucesso", () => {
        const nomeProduto = "Sauce Labs Bolt T-Shirt";

        cy.adicionaItemCarrinho(nomeProduto);

        cy.get("#shopping_cart_container")
            .should("have.text", "1")
            .and("be.visible")
            .click();
        cy.contains(nomeProduto).should("be.visible");
    });
});
