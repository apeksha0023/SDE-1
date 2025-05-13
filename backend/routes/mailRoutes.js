const express = require('express');
const { getMails } = require('../controllers/mailController');
const {
  getInbox,
  getSent,
  getDrafts,
  getTrash,
} = require('../controllers/mailController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', verifyToken, getMails);
router.get('/inbox', getInbox);
router.get('/sent', getSent);
router.get('/drafts', getDrafts);
router.get('/trash', getTrash);


module.exports = router;
