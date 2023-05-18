const { I } = inject();
// var validacao = require('assert')

module.exports = {

  button: {
    user: '.header_user_info'
  },
  validateUserLogged(name, lastName) {
    I.waitForElement(this.button.user, 15)
    I.see(`${name} ${lastName}`)
  }
}


