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
    sectionID,
    departmentID,
    branchID,
    supervisorID,
    employmentStatusID,
    roleID
  } = req.body;
  console.log(req.body);

  // Check for required fields
  if (!employeeId || !firstName || !lastName || !workEmail || !recruitmentDate) {
    return res.status(400).json({ message: 'Required fields are missing' });
  }

  // Insert employee data
  const queryEmployee = `
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
      recruitment_date,
      section_id,
      department_id,
      branch_id,
      supervisor_id,
      employment_status_id,
      role_id
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const employeeValues = [
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
    recruitmentDate,
    sectionID || null,
    departmentID || null,
    branchID || null,
    supervisorID || null,
    employmentStatusID || null,
    roleID || null
  ];

  // Insert emergency contact details
  const queryEmergencyContact = `
    INSERT INTO emergency_contact (
      employee_id,
      name,
      address,
      phone
    ) VALUES (?, ?, ?, ?)
  `;

  const emergencyContactValues = [
    employeeId,
    emergencyContactName || null,
    emergencyContactAddress || null,
    emergencyContactPhone || null
  ];

  db.query(queryEmployee, employeeValues, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Error saving the employee details', error: err });
    }

    db.query(queryEmergencyContact, emergencyContactValues, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error saving the emergency contact details', error: err });
      }

      res.status(201).json({ message: 'Employee added successfully', employeeId: employeeId });
    });
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
