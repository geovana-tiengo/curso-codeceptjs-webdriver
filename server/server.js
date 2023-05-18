module.exports = {
    start:  function () {
       console.log('Isso executou ANTES do projeto todo') //aqui posso criar um banco de dados, criar uma massa de dados, criar massa de testes, 
    },

    stop:  function () {
        console.log('Isso executou DEPOIS do projeto todo') //aqui no fim de tudo, acessa os dados e limpa tudo. ou posso enviar p um servidor.
},
}