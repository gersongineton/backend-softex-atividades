(async () => {
    const database = require('./db');
    const User = require('./user');
    
    await database.sync();

    const usuarios = await User.findAll();
    if (usuarios) {
        console.log("OK");
    }
    else{
        console.log("Deu ruim");
    }
    
})();