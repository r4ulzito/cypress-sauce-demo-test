describe("Ao acessar a página do carrinho de compras", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.efetuaLogin();
    });

    it("Deve efetuar checkout e finalizar compra", () => {
        const endpointPaginaCarrinho = "/cart.html";
        const produtoAlvo = "Sauce Labs Bike Light";
        const dadosCheckout = {
            nome: "Fulano",
            sobrenome: "Silva",
            cep: "11111111",
        };
        const valorCompra = 10.79;

        cy.adicionaItemCarrinho(produtoAlvo);

        cy.get("#shopping_cart_container").should("be.visible").click();

        cy.url().should(
            "eq",
            Cypress.config("baseUrl") + endpointPaginaCarrinho
        );

        cy.efetuaCheckout(dadosCheckout);

        cy.get("div").contains(produtoAlvo).should("be.visible");
        cy.get("div[data-test='total-label']")
            .contains("Total: $" + valorCompra)
            .should("be.visible");

        cy.finalizaCompra();
    });
});
