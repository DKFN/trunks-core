describe("Button renders", () => {
    it('Renders with default and minimal params', () => {
        cy.visit('')
        const TRUNKS = cy.window().then((w) => {
            const TRUNKS = w.TRUNKS

            const firstButton = {
                id: "Cypress1",
                component: "WTF",
                position: {
                    positionType: "absolute",
                    posX: 0,
                    posY: 0
                }
            }

            TRUNKS.addComponent(JSON.stringify(firstButton))

            const genBtn = cy.get("#errorFrame")
            genBtn.contains("Component WTF does not exist");
        })
    })
});