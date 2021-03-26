const router = require('express').Router()
const Controller = require('../controllers/controller')

router.get('/items', Controller.showItems)
router.get('/items/add',Controller.addItem)
router.post('/items/add', Controller.postAddItem)
router.get('/items/delete/:id', Controller.deleteItem)
router.get('/items/update/:id', Controller.update)
router.post('/items/update/:id',Controller.postUpdate)
router.get('/items/user/:id',Controller.buyItem)
router.get('/items/buy/:id',Controller.clickBuy)
router.get('/items/basket/:id',Controller.basket)



module.exports = router