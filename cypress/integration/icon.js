describe("CIcons", () => {

    it('Rebders', () => {
        cy.visit('')
        cy.window().then((w) => {
            const TRUNKS = w.TRUNKS

            const icon = {
                id: "Icn",
                component: "Icon",
                icon: "fa-home",
                position: {
                    positionType: "absolute",
                    posX: 40,
                    posY: 40,
                    width: 800,
                    height: 400
                }
            }

            TRUNKS.addComponent(JSON.stringify(icon));
        })
    })
});
