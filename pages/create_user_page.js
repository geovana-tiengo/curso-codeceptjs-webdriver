
const { I } = inject();
//var validacao = require('assert')

module.exports = { // insert your locators, ficar botoes, mensagens etc

  fileds: {
    firstName: '#customer_firstname',
    lastName: '#customer_lastname',
    password: '#passwd',
    days: '#days',
    months: '#months',
    years: '#years',
  },

  button: {
    male: '#id_gender2',
    register: '#submitAccount'
    //home: 'Home'
  },

  messages: {

  },

  labels: {
    createAnAccount: '.page-heading'
  },
  
  fillFieldCreateUser(name, lastName) {
    I.waitForElement(this.fileds.firstName, 5000)
      I.see('CREATE AN ACCOUNT')     
     I.click(this.button.male)
     I.fillField(this.fileds.firstName, name)
     I.fillField(this.fileds.lastName, lastName)
  
     I.fillField(this.fileds.password, secret('28122812'))
     I.selectOption(this.fileds.days, '1')
     I.selectOption(this.fileds.months, '6')
     I.selectOption(this.fileds.years, '2000')
     I.wait(10)
  },

  createUser() {
    I.click(this.button.register, 20)
  
  },
 
}