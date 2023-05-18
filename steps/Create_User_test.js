// var faker = require('assert')
var faker = require('faker');
//const login_success_page = require('../pages/login_success_page');

 //const login = require('./codecept.conf.js');

const {I, home_page, login_page, create_user_page, my_account_page, login_success_page } = inject ()

Feature('Create User');

Scenario('login success',  () => {
 
  I.amOnPage ('http://automationpractice.pl/', 25)

  login_success_page.fillFieldLogin()
  login_success_page.check()
});

Scenario ('Create a New User',  () => {

  var name = faker.name.firstName()
  var lastName = faker.name.lastName()
 
   I.amOnPage ('http://automationpractice.pl/')
  //  home
  home_page.accessLoginPage()
  I.wait(10)
  //  login
   login_page.submitCreateAccount(faker.internet.email())
   //I.wait(10)
  //  Create user
  create_user_page.fillFieldCreateUser(name, lastName),
  create_user_page.createUser()
  I.wait(20)

  //  my_account
  my_account_page.validateUserLogged(name, lastName)
  

});
