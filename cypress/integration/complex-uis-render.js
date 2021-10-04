describe("Complex ui renders", () => {
    it('Renders with default and minimal params', () => {
        cy.visit("http://localhost:3000")
        const TRUNKS = cy.window().then((w) => {
            const TRUNKS = w.TRUNKS

            const firstBox = {
                id: "Box",
                component: "Box",
                position: {
                    positionType: "absolute",
                    posX: 40,
                    posY: 40,
                    width: 800,
                    height: 400
                }
            }

            const firstButton = {
                id: "Cypress1",
                component: "Button",
                text: "Save",
                position: {
                    positionType: "absolute",
                    posX: 700,
                    posY: 350
                },
                styling: {
                    isSuccess: true
                }
            }

            TRUNKS.addComponent(JSON.stringify(firstBox))
            TRUNKS.addComponent(JSON.stringify(firstButton))

            const genBtn = cy.get("#Cypress1")
            genBtn.should("have.class", "button")
        })
    })
});