import express from 'express';
import db from '../utils/db.js'; // Ensure you are using the correct import for your db connection

const router = express.Router();

router.get('/section/:depID', (req, res) => {
  const deptID = req.params.depID;

  const query = `SELECT section_name FROM section WHERE department_id = ${deptID}`;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching sections:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(200).json(result); // Send the result directly
  });
});


router.get('/branch', (req, res) => {
  const query = 'SELECT branch_name FROM branch';

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching branches:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(200).json(result); // Send the result directly
  });
});


router.get('/supervisor', (req, res) => {
  const query = `
    SELECT 
      CONCAT(e.first_name, ' ', e.middle_name, ' ', e.last_name) AS full_name, 
      s.supervisor_id 
    FROM supervisor s
    LEFT JOIN employee e ON s.employee_id = e.employee_id
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching supervisors:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(200).json(result);
  });
});

router.get('/department', (req, res) => {
  const query = 'SELECT * FROM department';

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching departments:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(200).json(result);
  });
});


export default router;
