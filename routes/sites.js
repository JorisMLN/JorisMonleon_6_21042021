/* - - - - - sites ROUTER - - - - - */

const express = require('express');
const router = express.Router();

// const auth = require('../middleware/auth');
const sitesCtrl =  require('../controllers/sites');
// const multer = require('../middleware/multer-config');

router.get('/', /*auth,*/ sitesCtrl.getAllSites);
// router.get('/:id', auth, sitesCtrl.getOneSite);

module.exports = router;
