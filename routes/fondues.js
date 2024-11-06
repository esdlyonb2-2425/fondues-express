const { Router } = require('express');
const router = Router();
const {index, create} = require('../controllers/fondues');


router.get('/all', index)

router.post('/new', create)




module.exports = router;