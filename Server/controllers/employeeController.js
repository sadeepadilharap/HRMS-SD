import router from '../Routes/employeeRoute.js';
import db from '../utils/db.js';

// Function to add a new employee
const addEmployee = (req, res) => {
  const {
    employeeId,
    firstName,
    middleName,
    lastName,
    birthDate,
    maritalStatus,
    gender,
    workEmail,
    address,
    telNo,
    recruitmentDate,
    emergencyContactName,
    emergencyContactAddress,
    emergencyContactPhone,
    sectionName,
    departmentName,
    branchName,
    supervisor
  } = req.body;

  // Check for required fields
  if (!employeeId || !firstName || !lastName || !workEmail || !recruitmentDate) {
    return res.status(400).json({ message: 'Required fields are missing' });
  }

  const query = `
    INSERT INTO employee (
      employee_id,
        first_name,
        middle_name,
        last_name,
        birth_date,
        gender,
        marital_status,
        company_work_email,
        address,
        tel_no,
        recruitment_date
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    employeeId,
    firstName,
    middleName || null,
    lastName,
    birthDate || null,
    gender || null,
    maritalStatus || null,
    workEmail,
    address || null,
    telNo || null,
    recruitmentDate
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Error saving the employee details', error: err });
    }
    res.status(201).json({ message: 'Employee added successfully', employeeId: employeeId });
  });
};

export { addEmployee };

// Function to get all employees

const getAllEmployees = (req, res) => {
  const query = `
    SELECT * FROM employeeFullDetails
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Error fetching employees', error: err });
    }
    res.status(200).json(result);
  });
};

export { getAllEmployees };
