const express = require('express')
const router = express.Router()
const passport = require('passport')

const controller = require('../controllers/category')

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)
router.get('/:id', controller.getAll)
router.post('/', controller.create)
router.delete('/:id', controller.remove)
router.patch('/:id', controller.update)

module.exports = router