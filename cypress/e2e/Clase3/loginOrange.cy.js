describe("My First Test", {testIsolation:false} ,() => {

    beforeEach('Luego de visitar la pagina', () => {
        cy.clearLocalStorage();
        cy.clearCookies();
    });

    it('test login', () => {
        
        cy.loginPancho('Admin', 'admin123')
        
        cy.wait(2000)
    });

    it('after login', () => {
        cy.get('h6').contains('Dashboard')
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').contains('Logout').click()
        cy.wait(2000)
    });

    Cypress.Commands.add('loginPancho', (user, password) => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('.oxd-text--h5').contains('Login')
        cy.get('input[name="username"]').type(user)
        cy.get('input[name="password"]').type(password)
        cy.get('.oxd-button').click()
    });

});