describe('Enviar mensaje',{testIsolation:false},() =>{


    it('Validar envío de form vacío', () => {
        cy.formVacio()
        cy.wait(2000)
    })


    it('Validar envío de form con data incorrecta',()=>{
        cy.formDatosIncorrectos('asd', 'asdasd', 'asdasd', 'asdasd', 'asdasd')
        cy.wait(2000)
    })


    it('Validar envío de form con data correcta',()=>{
        cy.formDatosCorrectos('Juan Pérez', 'juan@gmail.com', '35123696457', 'Reserva de habitación para fecha X', 'loremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestlo')
        cy.wait(2000)
    })


    Cypress.Commands.add('formVacio', () => {
        cy.visit('https://automationintesting.online/')
        cy.log('Envío de form de contacto en blanco...')
        cy.get('#submitContact').click()
        cy.get('.alert').should('be.visible')
        cy.get('p').contains('Subject must be between 5 and 100 characters.')
        cy.get('p').contains('Subject may not be blank')
        cy.get('p').contains('Name may not be blank')
        cy.get('p').contains('Message must be between 20 and 2000 characters.')
        cy.get('p').contains('Message may not be blank')
        cy.get('p').contains('Email may not be blank')
        cy.get('p').contains('Phone may not be blank')
        cy.get('p').contains('Phone must be between 11 and 21 characters.')
    });

    Cypress.Commands.add('formDatosIncorrectos', (name, email, phone, subject, ContactDescription ) => {
        cy.log('Set de datos incorrectos...')
        cy.get('input[placeholder="Name"]').type(name)
        cy.get('input[placeholder="Email"]').type(email)
        cy.get('input[placeholder="Phone"]').type(phone)
        cy.get('input[placeholder="Subject"]').type(subject)
        cy.get('[data-testid="ContactDescription"]').type(ContactDescription)
        cy.get('#submitContact').click()

        cy.get('.alert').should('be.visible')
        cy.get('p').contains('Phone must be between 11 and 21 characters.')
        cy.get('p').contains('debe ser una dirección de correo electrónico con formato correcto')
        cy.get('p').contains('Message must be between 20 and 2000 characters.')
    });

    Cypress.Commands.add('formDatosCorrectos', (name, email, phone, subject, ContactDescription ) => {
        cy.log('Set de datos incorrectos...')
        cy.get('input[placeholder="Name"]').type(name)
        cy.get('input[placeholder="Email"]').type(email)
        cy.get('input[placeholder="Phone"]').type(phone)
        cy.get('input[placeholder="Subject"]').type(subject)
        cy.get('[data-testid="ContactDescription"]').type(ContactDescription) 
        cy.get('#submitContact').click()
    });

})