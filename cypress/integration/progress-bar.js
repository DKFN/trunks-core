import _ from "lodash";

describe("Progress bar renders", () => {
    it('Renders a default progress bar', () => {
        cy.visit('')
        const TRUNKS = cy.window().then((w) => {
            const TRUNKS = w.TRUNKS

            const firstButton = {
                id: "Cypress1",
                component: "ProgressBar",
                position: {
                    positionType: "absolute",
                    posX: 0,
                    posY: 0,
                    width: 500
                }
            }

            TRUNKS.addComponent(JSON.stringify(firstButton))

            const genBtn = cy.get("#Cypress1")
            genBtn.should("have.class", "progress")
        })
    });

    it('Renders a default progress bar with value', () => {
        cy.visit('')
        const TRUNKS = cy.window().then((w) => {
            const TRUNKS = w.TRUNKS

            const firstButton = {
                id: "Cypress1",
                component: "ProgressBar",
                value: 50,
                position: {
                    positionType: "absolute",
                    posX: 0,
                    posY: 0,
                    width: 500
                }
            }

            TRUNKS.addComponent(JSON.stringify(firstButton))

            const genBtn = cy.get("#Cypress1")
            genBtn.should("have.class", "progress")
            genBtn.should("have.value", 50)
        })
    })

    it('Sends correct onClick event', () => {
        cy.visit('')
        const TRUNKS = cy.window().then((w) => {
            const TRUNKS = w.TRUNKS

            const firstButton = {
                id: "Cypress1",
                component: "ProgressBar",
                value: 50,
                position: {
                    positionType: "absolute",
                    posX: 0,
                    posY: 0,
                    width: 500
                }
            }


            const spiedEvents = cy.spy(w.TRUNKS, 'sendEvent')
            TRUNKS.addComponent(JSON.stringify(firstButton))

            const genBtn = cy.get("#Cypress1")
            genBtn.should("have.class", "progress")
            genBtn.should("have.value", 50)

            cy.get("#Cypress1").click({force: true}).then(() => {
                expect(spiedEvents).to.be
                    .calledWith("onClick", {id: "Cypress1", name: undefined, value: undefined})
            })
        })
    })

    it('Renders a default progress bar with value and update its value', () => {
        cy.visit('')
        const TRUNKS = cy.window().then((w) => {
            const TRUNKS = w.TRUNKS

            const firstButton = {
                id: "Cypress1",
                component: "ProgressBar",
                value: 50,
                position: {
                    positionType: "absolute",
                    posX: 0,
                    posY: 0,
                    width: 500
                }
            }

            TRUNKS.addComponent(JSON.stringify(firstButton))

            _.range(1,11).map((v) => {
                setTimeout(() => {
                    const targetValue = 10 * v;
                    const updateProps = {
                        id: "Cypress1",
                        value: targetValue
                    }


                    TRUNKS.updateComponent(JSON.stringify(updateProps))
                    const genBtn = cy.get("#Cypress1")
                    genBtn.should("have.class", "progress")
                    genBtn.should("have.value", 50)
                }, 100 * v)
            })

        })
    })
});