import mysql from 'mysql2';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'hrms_sd',
    waitForConnections: true,
});

con.connect((err) => {
    if (err) {
        console.log('Error connecting to database');
        return;
    }
    console.log('Connected to database');
});

export default con;