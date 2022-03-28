/* - - - - - sites ROUTER - - - - - */

const express = require('express');
const router = express.Router();

// const auth = require('../middleware/auth');
const sitesCtrl = require('../controllers/sites');
// const multer = require('../middleware/multer-config');

router.post('/', /*auth,*/ sitesCtrl.getAllSites);
router.post('/allCom', /*auth,*/ sitesCtrl.getAllComs);
router.post('/com', /*auth,*/ sitesCtrl.postCom);
router.post('/askType', /*auth,*/ sitesCtrl.askDeviceType);
router.post('/bool', /*auth,*/ sitesCtrl.askBool);
router.post('/valid', /*auth,*/ sitesCtrl.validated);
// router.get('/:id', auth, sitesCtrl.getOneSite);

module.exports = router;
