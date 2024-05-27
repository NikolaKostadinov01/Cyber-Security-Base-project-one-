const express = require('express');
const { getAllTasks, createTask } = require('../controllers/taskController');

const router = express.Router();

router.get('/', getAllTasks);
router.post('/', createTask);

// Other CRUD endpoints can be defined similarly

module.exports = router;
