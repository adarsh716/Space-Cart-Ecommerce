const express = require('express');
const { fetchUserById, updateUser,writeReview } = require('../controller/User');

const router = express.Router();
router.get('/own', fetchUserById)
      .patch('/:id', updateUser)
      //.post('/review/:productId', writeReview)
exports.router = router;