
const router = require('express').Router();
const controller = require('../controllers/controller.js');
const other_controller = require('../controllers/controller_api.js')



router.get('/aviator_jackets', controller.get_aviator_leather_jackets);
router.get('/biker_jackets', controller.get_Biker_leather_jackets);
router.get('/bomber_jackets', controller.get_Bomber_leather_jackets);
router.get('/cafe_racer_jackets', controller.get_Cafe_racer_leather_jackets);
router.get('/puffer_jackets', controller.get_puffer_leather_jackets);
router.get('/shearling_jackets', controller.get_Shearling_leather_jackets);
router.get('/leather_vests', controller.get_leather_vests);
router.get('/custom-coat-and-blazer',controller.get_coat_and_blazer);
router.get('/custom-aviator-jacket',controller.get_custom_aviator_jacket)
router.get('/leather-wallets',controller.get_leather_wallet)
router.get('/leather-portfolios',controller.get_leather_portfolios)
router.get('/leather-passport-holder',controller.get_leather_passport_holder)
router.get('/leather-duffle-bags',controller.get_leather_duffel_bags)
router.get('/leather-backpacks',controller.get_leather_backpacks)
router.get('/leather-handbags',controller.get_leather_handbags)
router.get('/corporate-gifts',controller.get_corporate_gifts)
router.get('/leather-bags',controller.get_leather_bags)
router.get('/leather-scin',controller.get_leather_scin)
router.get('/product-id',other_controller.get_data_by_id)


module.exports = router;