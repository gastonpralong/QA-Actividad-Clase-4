// Describe un conjunto de pruebas con un contexto compartido (testIsolation:false evita que Cypress aísle el estado entre pruebas)
describe('Algunos métodos', { testIsolation: false }, () => {

    // Primera prueba: visitar la página principal y verificar el título
    it('Visitar la página y verificar el título de la página', () => {
        cy.Entrar_a_la_pagina_y_verificacion()
        cy.wait(2000)
    });

    // Segunda prueba: navegar al formulario
    it('Ir al form', () => {
        // Encuentra el elemento de encabezado con texto 'Elements' y haz clic en él
        cy.get('h5').contains('Elements').click();
        // Encuentra el elemento con texto 'Forms' y haz clic
        cy.get('span').contains('Forms').click();
        // Encuentra el elemento con texto 'Practice Form' y haz clic
        cy.get('span').contains('Practice Form').click();

        // Valida que la imagen con el atributo src '/images/Toolsqa.jpg' sea visible
        cy.get('img[src="/images/Toolsqa.jpg"]').should('be.visible');
    });

    // Tercera prueba: completar el formulario
    it('Completar el form', () => {
        // Intenta enviar el formulario directamente
        cy.get('#submit').click();
        // Verifica que los campos de nombre y apellido estén marcados como inválidos
        cy.get('#firstName:invalid').should('exist');
        cy.get('#lastName:invalid').should('exist');

        // Completa el campo de número de usuario
        cy.get('#userNumber').type('123456789');

        // Abre el selector de fecha y selecciona un día (16 en este caso)
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__day--016').click();

        // Marca el primer checkbox (Hobbies)
        cy.get('#hobbies-checkbox-1').check({ force: true });

        // Marca y luego desmarca el segundo checkbox
        cy.get('#hobbies-checkbox-2').check({ force: true });
        cy.get('#hobbies-checkbox-2').uncheck({ force: true });

        // Carga un archivo de prueba
        cy.get('#uploadPicture').selectFile('cypress/fixtures/test.jpg');

        // Verifica que el campo de ciudad esté deshabilitado
        cy.get('#city').should('not.be.enabled');

        // Llena los campos obligatorios de nombre y apellido, que previamente estaban vacíos
        cy.get('#firstName:invalid').type('juan');
        cy.get('#lastName:invalid').type('trolo');

        // Selecciona el género haciendo clic en el primer botón de género disponible
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();

        // Selecciona el estado desde el menú desplegable
        cy.get('div').contains('Select State').click();
        cy.get('#react-select-3-option-0').click();

        // Envía el formulario nuevamente
        cy.get('#submit').click();

        // Espera 2 segundos para permitir la carga del modal de confirmación
        cy.wait(2000);

        // Valida que el mensaje de confirmación se muestra correctamente
        cy.get('#example-modal-sizes-title-lg').contains('Thanks for submitting the form').should('be.visible');
    });

    Cypress.Commands.add('Entrar_a_la_pagina_y_verificacion',() => {
        // Visita la URL especificada
        cy.visit('https://demoqa.com/');
        // Verifica que el título de la página sea exactamente 'DEMOQA'
        cy.title().should('eq', 'DEMOQA');
    });
});


