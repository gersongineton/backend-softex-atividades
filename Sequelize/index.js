(async () => {
    const database = require('./db');
    const User = require('./user');
    
    await database.sync();

    const usuarios = await User.findByPk(1);
    if (usuarios) {
        console.log("Retorno OK, conexão estabelecida!");            
    }else {
        console.log("Erro de conexão ou o registro não existe");             
    }
})();