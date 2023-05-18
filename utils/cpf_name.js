const {generate} = require ('gerador-validador-cpf')

const cpfName = () => {

    var cpf = generate({format: true})
    var cpfAndName = cpf + ' - Geovana'
    return cpfAndName 
}

exports.cpfName = cpfName