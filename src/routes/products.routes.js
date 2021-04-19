const { Router } = require('express')
const router = Router()

const { 
    renderProductForm,
    createNewProduct,
    renderProducts,
    renderEditForm,
    uptadeProduct,
    deleteProduct } = require('../controllers/products.controller');

    const {isAuthenticated}= require('../helpers/auth')

//new products
router.get('/products/add',isAuthenticated, renderProductForm);
router.post('/products/new-product', isAuthenticated, createNewProduct);

//get all produts
router.get('/products',isAuthenticated, renderProducts)

//edit products
router.get('/products/edit/:id',isAuthenticated, renderEditForm)
router.put('/products/edit/:id', isAuthenticated,  uptadeProduct)

//Delete notes
router.delete('/products/delete/:id',isAuthenticated, deleteProduct)


module.exports = router