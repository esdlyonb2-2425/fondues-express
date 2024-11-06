const { Router } = require('express');
const router = Router();
const {index, create} = require('../controllers/fondues');


router.get('/all', index)

router.get('/new', create)




module.exports = router;