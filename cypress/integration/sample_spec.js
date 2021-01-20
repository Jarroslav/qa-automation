import SignInPage from "./pop/SignInPage";

const link = 'https://www.pecodesoftware.com/qa-portal/registerlogin'

describe('QA Automation Test', function () {
    const signIn = new SignInPage();

    beforeEach(() => {
        signIn.visit(`${link}/registerlogin.php`)
    })

    it('logo image', function () {
        signIn.getLogoImageError('#logomini',
            'https://pecode-software.web.app/static/media/icon-logo.f8576d05.svg')
    })

    it('greets with Sign In', function () {
        signIn.getGreetsSignInError('h1', 'QA Portal Login')
    })

    it('requires username', function () {
        signIn.getUsernameError('form', 'Login');
        signIn.getMessagesError('.help-block', 'Please enter username')
    })

    it('requires password', function () {
        signIn.getAuthorizationError('[name=username]','David{Enter}');
        signIn.getMessagesError('.help-block', 'Please enter your password');
    })

    it('requires valid username and password', function () {
        signIn.getAuthorizationError('[name=username]', 'David');
        signIn.getAuthorizationError('[name=password]', 'invalid{Enter}');
        signIn.getMessagesError('.help-block', 'No account found with that username.');
    })

    it('navigates to /registerlogin on successful login', function () {
        signIn.getAuthorizationError('[name=username]', 'admin');
        signIn.getAuthorizationError('[name=password]', 'admin');
        signIn.getHashError('/#');
    })
})
