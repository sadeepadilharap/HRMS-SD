import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Grid,
  Typography,
  Divider,
  Card,
  CardContent,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@mui/material';
import axios from 'axios';

const AddEmployeeDialog = ({ open, handleClose }) => {
  const [sections, setSections] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [branches, setBranches] = useState([]);
  const [supervisors, setSupervisors] = useState([]);

  const [employeeData, setEmployeeData] = useState({
    employeeId: '',
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    maritalStatus: '',
    gender: '',
    workEmail: '',
    address: '',
    telNo: '',
    recruitmentDate: '',
    emergencyContactName: '',
    emergencyContactAddress: '',
    emergencyContactPhone: '',
    sectionID: '',
    departmentID: '',
    branchID: '',
    supervisorID: '',
    employmentStatusID: '',
    roleID: ''
  });

  useEffect(() => {
    // Fetch dropdown data from backend when component mounts
    const fetchDropdownData = async () => {
      try {
        const sectionRes = await axios.get('/api/sections');
        const departmentRes = await axios.get('/api/departments');
        const branchRes = await axios.get('/api/branches');
        const supervisorRes = await axios.get('/api/supervisors');
        
        setSections(sectionRes.data);
        setDepartments(departmentRes.data);
        setBranches(branchRes.data);
        setSupervisors(supervisorRes.data);
      } catch (error) {
        console.error('Error fetching dropdown data:', error);
      }
    };

    fetchDropdownData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/api/employees', employeeData);
      handleClose(); // Close the dialog after submission
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Employee</DialogTitle>
      <DialogContent>
        <Card className="w-full shadow-lg">
          <CardContent>
            <Typography variant="h6" className="text-primary font-bold mb-4 pb-6">
              Personal Information
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Employee ID"
                  variant="outlined"
                  fullWidth
                  name="employeeId"
                  value={employeeData.employeeId}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  name="firstName"
                  value={employeeData.firstName}
                  onChange={handleInputChange}
                />
              </Grid>
              {/* Other personal fields similar to above */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Section</InputLabel>
                  <Select
                    name="sectionID"
                    value={employeeData.sectionID}
                    onChange={handleInputChange}
                  >
                    {sections.map((section) => (
                      <MenuItem key={section.id} value={section.id}>
                        {section.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Department</InputLabel>
                  <Select
                    name="departmentID"
                    value={employeeData.departmentID}
                    onChange={handleInputChange}
                  >
                    {departments.map((department) => (
                      <MenuItem key={department.id} value={department.id}>
                        {department.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {/* Other dropdowns like branch, supervisor, etc */}
            </Grid>
          </CardContent>
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEmployeeDialog;
