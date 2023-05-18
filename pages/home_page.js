const { I } = inject();

module.exports = { // insert your locators, ficar botoes, mensagens etc

  fileds: {

  },

  button: {
    loginbutton: 'Sign in'
  },

  messages: {

  },

  accessLoginPage() {
    I.click(this.button.loginbutton)
  }
}
