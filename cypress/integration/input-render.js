describe("Button renders", () => {
    it('Renders with default and minimal params', () => {
        cy.visit('')
        const TRUNKS = cy.window().then((w) => {
            const TRUNKS = w.TRUNKS

            const firstButton = {
                id: "Cypress1",
                component: "Input",
                position: {
                    positionType: "absolute",
                    posX: 0,
                    posY: 0
                }
            }

            TRUNKS.addComponent(JSON.stringify(firstButton))

            const genBtn = cy.get("#Cypress1")
            genBtn.should("have.class", "input")
        })
    })

    it('Triggers onChange events', () => {
        cy.visit('')
        const TRUNKS = cy.window().then((w) => {
            const TRUNKS = w.TRUNKS

            const firstButton = {
                id: "Cypress1",
                component: "Input",
                name: "testinput",
                position: {
                    positionType: "absolute",
                    posX: 0,
                    posY: 0
                }
            }

            TRUNKS.setEventHook(console.log)
            TRUNKS.addComponent(JSON.stringify(firstButton))

            const expectedText = "I am a test input, yohoo !"
            const genBtn = cy.get("#Cypress1")
            const spiedEvents = cy.spy(w.TRUNKS, 'sendEvent')
            genBtn.should("have.class", "input")
            genBtn.type(expectedText).then(() => {
                expect(spiedEvents).to.be
                    .calledWith("onClick", {id: "Cypress1", name: "testinput", value: undefined})
                expect(spiedEvents).to.be
                    .calledWith("onChange", {id: "Cypress1", name: "testinput", value: expectedText})
            })
        })
    })
});