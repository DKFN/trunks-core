describe("Complex ui renders", () => {
    it('Renders with default and minimal params', () => {
        cy.visit('')
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
                    color: 'success'
                }
            }

            const secondButton = {
                id: "Cypress2",
                component: "Button",
                text: "Cancel",
                position: {
                    positionType: "absolute",
                    posX: 600,
                    posY: 350
                },
                styling: {
                    color: 'error'
                }
            }

            const textOneLabel = {
                id: "Text1_Label",
                component: "Text",
                text: "First name",
                position: {
                    positionType: "absolute",
                    posX: 50,
                    posY: 60
                }
            }

            const textOne = {
                id: "Text1",
                component: "Input",
                text: "John",
                position: {
                    positionType: "absolute",
                    posX: 50,
                    posY: 90
                }
            }

            const textTwoLabel = {
                id: "Text2_Label",
                component: "Text",
                text: "Last name",
                position: {
                    positionType: "absolute",
                    posX: 50,
                    posY: 140
                }
            }

            const textTwo = {
                id: "Text2",
                component: "Input",
                text: "Doe",
                position: {
                    positionType: "absolute",
                    posX: 50,
                    posY: 170
                }
            }

            const textThreeLabel = {
                id: "Text3_Label",
                component: "Text",
                text: "Age",
                position: {
                    positionType: "absolute",
                    posX: 50,
                    posY: 220
                }
            }

            const textThree = {
                id: "Text3",
                component: "Input",
                position: {
                    positionType: "absolute",
                    posX: 50,
                    posY: 200
                }
            }

            TRUNKS.setEventHook((event) => {
                console.log(event);
            });

            TRUNKS.addComponent(JSON.stringify(firstBox))
            TRUNKS.addComponent(JSON.stringify(firstButton))
            TRUNKS.addComponent(JSON.stringify(secondButton))
            TRUNKS.addComponent(JSON.stringify(textOneLabel))
            TRUNKS.addComponent(JSON.stringify(textOne))
            TRUNKS.addComponent(JSON.stringify(textTwo))
            TRUNKS.addComponent(JSON.stringify(textTwoLabel))
            TRUNKS.addComponent(JSON.stringify(textThree))
            TRUNKS.addComponent(JSON.stringify(textThreeLabel))

            const genBtn = cy.get("#Cypress1")
            genBtn.should("have.class", "button")
            const genBtn2 = cy.get("#Cypress2")
            genBtn2.should("have.class", "button")
        })
    })
});