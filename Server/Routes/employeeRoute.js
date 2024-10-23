import express from'express';
import {addEmployee} from '../controllers/employeeController.js';
import {getAllEmployees} from '../controllers/employeeController.js';
import { editEmployee } from '../controllers/employeeController.js';
import { deleteEmployee } from '../controllers/employeeController.js'; 


const router = express.Router();

router.post('/', addEmployee);
router.get('/', getAllEmployees);
router.put('/:id', editEmployee);
router.delete('/:id', deleteEmployee);


router.get('/test', (req, res) => {
    res.send('Employee route is working');
});

export default router;
