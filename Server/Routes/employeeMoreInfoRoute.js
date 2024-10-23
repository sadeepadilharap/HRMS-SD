import express from 'express';
import db from '../utils/db.js'; // Ensure you are using the correct import for your db connection

const router = express.Router();

router.get('/section', (req, res) => {
  const query = 'SELECT section_name FROM section';

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching sections:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(200).json(result); // Send the result directly
  });
});

export default router;

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

