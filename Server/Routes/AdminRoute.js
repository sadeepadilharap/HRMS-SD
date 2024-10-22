import express from 'express';
import con from '../utils/db.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/login', (req, res) => {
    const sql = "SELECT * FROM user_account WHERE user_id = ? AND user_password = ?";
    con.query(sql, [req.body.user_id, req.body.user_password], (err, result) => {
        if (err) {
            console.log(err)
            return res.json({ loginStatus: false, message: 'Query failed' })
        }
        if (result.length > 0) {
            const user_id = result[0].user_id;
            const token = jwt.sign({ role: "admin", user_id: user_id }, "jwt_secret_key", { expiresIn: '1d' })
            res.cookie('token', token)
            return res.json({ loginStatus: true})
        }else{
            return res.json({ loginStatus: false, Error: 'Invalid User ID or Password' })
        }

    })

})

export { router as adminRoute };