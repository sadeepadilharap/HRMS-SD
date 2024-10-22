import express from'express';
import {addEmployee} from '../controllers/employeeController.js';
import {getAllEmployees} from '../controllers/employeeController.js';

const router = express.Router();

router.post('/', addEmployee);
router.get('/', getAllEmployees);

router.get('/test', (req, res) => {
    res.send('Employee route is working');
});

export default router;
