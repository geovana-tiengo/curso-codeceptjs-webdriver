const { I } = inject();

module.exports = { // insert your locators, ficar botoes, mensagens etc

  fileds: {
    emailAddressRegisterField: '#email_create'
    
  },

  button: {
    Button: '#SubmitCreate'
  },

  messages: {

  },

  submitCreateAccount(email) {
    I.fillField (this.fileds.emailAddressRegisterField, email)
    I.click (this.button.Button)
  },
 
}
