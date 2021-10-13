describe("Alert renders", () => {
    it('Renders simple alert', () => {
        cy.visit('')

        const TRUNKS = cy.window().then((w) => {
            const TRUNKS = w.TRUNKS

            const firstButton = {
                id: "Cypress1",
                component: "SimpleAlert",
                title: "Confirm this",
                text: "Are you sure you want to confirm this ? Very very long text ! \n New Line",
                position: {
                    positionType: "absolute",
                    height: 400,
                    width: 300
                }
            }

            TRUNKS.addComponent(JSON.stringify(firstButton))

            const genBtn = cy.get("#Cypress1")
            genBtn.should("have.class", "button")
        })
    })
});