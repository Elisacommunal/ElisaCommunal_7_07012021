const express = require('express');
const router = express.Router();

const articleCtrl = require('../controllers/article.controllers.js');
const auth = require('../middleware/auth.js')

router.post('/', auth,  articleCtrl.create);
router.get('/',  auth,  articleCtrl.findAll);
router.get('/:articleId',  auth, articleCtrl.findOne);
router.put('/:articleId', auth, articleCtrl.update);
router.delete('/:articleId', auth, articleCtrl.delete);
router.delete('/', auth, articleCtrl.deleteAll);

module.exports = router;