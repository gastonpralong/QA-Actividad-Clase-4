
describe('Actividad asistencia', {testIsolation:false}, ()=> {

    it('Visitar sitio', ()=>{
        cy.visit('https://automationintesting.online/');

        //verificar datos del hotel
        cy.get('.contact > :nth-child(3) > :nth-child(1)').contains('Shady Meadows B&B')
        cy.get('.contact > :nth-child(3) > :nth-child(2)').contains('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S')
        cy.get('.contact > :nth-child(3) > :nth-child(3)').contains('012345678901')
        cy.get('.contact > :nth-child(3) > :nth-child(4)').contains('fake@fakeemail.com')


        //parte 2 de imagenes
        cy.get('img[src="/images/rbp-logo.jpg"]').should('be.visible');
        cy.get('img[src="/images/room2.jpg"]').should('be.visible');

        //parte 3 texto esperado
        cy.get('.col-sm-10 > p').should('have.text', 'Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.')
        
        
        
    })



});