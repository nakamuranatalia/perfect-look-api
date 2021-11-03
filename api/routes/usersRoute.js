const { Router } = require('express');
const userController = require('../controllers/UsersController');

const user = new userController()

const router = Router()

router
    .post('/api/v1/users', user.create)
    .get('/api/v1/users', user.findAll)
    .get('/api/v1/users/:id', user.findById)
    .put('/api/v1/users/:id', user.update)
    .delete('/api/v1/users/:id', user.delete)

module.exports = router;
