const { I } = inject();
//var validacao = require('assert')

module.exports = {
    fileds: {
      firstName: '.header_user_info',
        name: '#email',
        password: '#passwd',
      },
    
      button: {
        loginbutton: 'Sign in',
        register: '#SubmitLogin',
      },
      
    fillFieldLogin() {
     //I.fillField(this.fileds.firstName)
     I.click(this.button.loginbutton)
     I.wait(30)
     I.fillField(this.fileds.name, 'geteste@gmail.com', 10)
     I.fillField(this.fileds.password, secret('123456'))
     I.wait(20)
     I.click(this.button.register)
     I.wait(10)
  },
   check() {
    I.waitForElement('.header_user_info')
    I.wait(5)
    I.see('Geovana Batista')
    //I.waitForElement('Home', 60)
    //I.click(this.button.home, 20)
  },
  }
