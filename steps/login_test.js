const { I } = inject ()
const cpfName = require ('../utils/cpf_name')

Feature('Login');

BeforeSuite(() => {   //
    console.log(cpfName.cpfName())
}); 

Before(() => {   // before executa sempre antes de cada cenario. Simplifica a tarefa que se repetir
    I.amOnPage('http://automationpractice.pl/')
}); 

After(() => {  
    console.log('After')
});

AfterSuite(() => {  //executa depois do senario. como acima
    console.log('Depois de tudo')
});

Scenario('Validade Enpty E-mail On Create Account 1',  ({ I }) => {

   I.click('.login')
   
  });

  Scenario('Validade Enpty E-mail On Create Account 2',  ({ I }) => {
   
    I.click('.login')
    I.wait(15)
   });

   

