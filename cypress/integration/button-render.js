describe("Button renders", () => {
    it('Renders with default and minimal params', () => {
        cy.visit('')
        const TRUNKS = cy.window().then((w) => {
            const TRUNKS = w.TRUNKS

            const firstButton = {
                id: "Cypress1",
                component: "Button",
                position: {
                    positionType: "absolute",
                    posX: 0,
                    posY: 0
                }
            }

            TRUNKS.addComponent(JSON.stringify(firstButton))

            const genBtn = cy.get("#Cypress1")
            genBtn.should("have.class", "button")
        })
    })

    it('Renders with absolute params and color and some text', () => {
        cy.visit('')
        const TRUNKS = cy.window().then((w) => {
            const TRUNKS = w.TRUNKS

            const firstButton = {
                id: "Cypress1",
                component: "Button",
                text: "This is a test button !",
                name: "mytestbtn",
                position: {
                    positionType: "absolute",
                    posX: 45,
                    posY: 45
                },
                styling: {
                    color: 'success'
                }
            }

            TRUNKS.addComponent(JSON.stringify(firstButton))
            cy.wait(100)
            const genBtn = cy.get("#Cypress1")
            genBtn.should("have.class", "button")
            genBtn.should("have.class", "is-success")
            genBtn.should("have.css", 'top')
        })
    })

    it('Updates a simple button', () => {
        cy.visit('')
        const TRUNKS = cy.window().then((w) => {
            const TRUNKS = w.TRUNKS

            const firstButton = {
                id: "Cypress1",
                component: "Button",
                text: "This is a test button !",
                name: "mytestbtn",
                position: {
                    positionType: "absolute",
                    posX: 45,
                    posY: 45
                },
                styling: {
                    color: 'success'
                }
            }

            const updatePatch = {
                id: "Cypress1",
                text: "This is my new text !"
            }

            const updatePatch2 = {
                id: "Cypress1",
                position: {
                    posX: 90
                }
            }

            TRUNKS.addComponent(JSON.stringify(firstButton))
            cy.wait(100)
            const genBtn = cy.get("#Cypress1")
            genBtn.should("have.class", "button")
            genBtn.should("have.class", "is-success")
            genBtn.should("have.css", 'top')

            TRUNKS.updateComponent(JSON.stringify(updatePatch));
            const genBtn2 = cy.get("#Cypress1")
            genBtn2.should("have.text", "This is my new text !")


            TRUNKS.updateComponent(JSON.stringify(updatePatch2));
        })
    })
})