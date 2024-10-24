import express from 'express';
import cors from 'cors';
import { adminRoute } from './Routes/AdminRoute.js';
import employeeRoute from './Routes/employeeRoute.js'
import employeeMoreInfoRoute from './Routes/employeeMoreInfoRoute.js'; 

const app = express();
app.use(cors({
  origin: ['http://localhost:5173'],
  method: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json()); // Correct method for parsing JSON



app.use('/auth', adminRoute); // Correct method to use routes
app.use('/api/employee', employeeRoute)
app.use('/api/employeeMoreInfo', employeeMoreInfoRoute);

app.get('/', (req, res) => {
  res.send('Server is running');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
