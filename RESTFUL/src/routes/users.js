let express   = require('express');
let routes    = express.Router();

routes.get('/users', (req, res) =>  {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users:[{
            name: 'Gerson',
            email: 'gerson@gmail.com',
            course: 'Desenvolvedor Backend',
            id: 1
        }]
    });
});

routes.post('/users', (req, res) =>  {
    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users:[{
            name: 'Gineton',
            email: 'gineton@gmail.com',
            course: 'Desenvolvedor Backend',
            id: 1
        }]
    });
});




module.exports = routes;