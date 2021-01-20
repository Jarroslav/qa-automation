class SignInPage {
    visit(link) {
        cy.visit(link)
    }

    getLogoImageError(field, link) {
        return cy.get(field).should('have.attr', 'src', link)
    }

    getGreetsSignInError(tagName, phrase) {
        return cy.contains(tagName, phrase)
    }

    getUsernameError(field, content) {
       return cy.get(field).contains(content).click();
    }

    getAuthorizationError(field, text) {
        return cy.get(field).type(text);
    }

    getMessagesError(field, message) {
        return cy.get(field).should('contain', message)
    }

    getHashError(link) {
        return cy.hash().should('eq', link)
    }
}

export default SignInPage;