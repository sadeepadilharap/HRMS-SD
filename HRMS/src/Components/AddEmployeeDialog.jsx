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
  MenuItem,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GroupIcon from '@mui/icons-material/Group';
import axios from 'axios';

const AddEmployeeDialog = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
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
    sectionName: '',
    departmentName: '',
    branchName: '',
    supervisor: ''
  });

  // Dummy data for dropdowns
  const maritalStatusOptions = ['Married', 'Unmarrried'];
  const genderOptions = ['Male', 'Female', 'Other'];
  const [sectionOptions, setSections] = useState([]); // State to store section names
  const departmentOptions = ['Operations', 'Support', 'Development', 'Marketing'];
  const branchOptions = ['New York', 'San Francisco', 'Chicago', 'Los Angeles'];
  const supervisorOptions = ['John Doe', 'Jane Smith', 'Michael Johnson'];

  useEffect(() => {
    // Fetch sections when the component loads
    const fetchSections = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/employeeMoreInfo/section'); // Your backend API endpoint
        setSections(response.data); // Set the fetched sections in state
      } catch (error) {
        console.error('Error fetching sections:', error);
      }
    };

    fetchSections(); // Call the function to fetch section data
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    axios
      .post('http://localhost:3000/api/employee', formData)
      .then((response) => {
        console.log('Employee added:', response.data);
        handleClose();
      })
      .catch((error) => {
        console.error('Error adding employee:', error);
      });
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
                  name="employeeId"
                  variant="outlined"
                  fullWidth
                  value={formData.employeeId}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Middle Name"
                  name="middleName"
                  variant="outlined"
                  fullWidth
                  value={formData.middleName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  fullWidth
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Birth Date"
                  name="birthDate"
                  variant="outlined"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  value={formData.birthDate}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Marital Status"
                  name="maritalStatus"
                  variant="outlined"
                  fullWidth
                  value={formData.maritalStatus}
                  onChange={handleInputChange}
                >
                  {maritalStatusOptions.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Gender"
                  name="gender"
                  variant="outlined"
                  fullWidth
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  {genderOptions.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {gender}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Work Email"
                  name="workEmail"
                  variant="outlined"
                  fullWidth
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <EmailIcon className="mr-2 text-primary" />
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  name="address"
                  variant="outlined"
                  fullWidth
                  value={formData.address}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <HomeIcon className="mr-2 text-primary" />
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Telephone Number"
                  name="telNo"
                  variant="outlined"
                  fullWidth
                  value={formData.telNo}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <PhoneIcon className="mr-2 text-primary" />
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Recruitment Date"
                  name="recruitmentDate"
                  variant="outlined"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  value={formData.recruitmentDate}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>

            <Divider className="my-6" />

            <Typography variant="h6" className="text-primary font-bold mb-4 pb-6">
              Emergency Contact Information
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Emergency Contact Name"
                  name="emergencyContactName"
                  variant="outlined"
                  fullWidth
                  value={formData.emergencyContactName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Emergency Contact Address"
                  name="emergencyContactAddress"
                  variant="outlined"
                  fullWidth
                  value={formData.emergencyContactAddress}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <HomeIcon className="mr-2 text-primary" />
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Emergency Contact Phone"
                  name="emergencyContactPhone"
                  variant="outlined"
                  fullWidth
                  value={formData.emergencyContactPhone}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <PhoneIcon className="mr-2 text-primary" />
                  }}
                />
              </Grid>
            </Grid>

            <Divider className="my-6" />

            <Typography variant="h6" className="text-primary font-bold mb-4 pt-10 pb-6">
              Employment Details
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Section Name"
                  name="sectionName"
                  variant="outlined"
                  fullWidth
                  value={formData.sectionName}
                  onChange={handleInputChange}
                >
                  {sectionOptions.map((section, index) => (
                    <MenuItem key={index} value={section.section_name}>
                      {section.section_name} {/* Access section_name correctly */}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Department Name"
                  name="departmentName"
                  variant="outlined"
                  fullWidth
                  value={formData.departmentName}
                  onChange={handleInputChange}
                >
                  {departmentOptions.map((department) => (
                    <MenuItem key={department} value={department}>
                      {department}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Branch Name"
                  name="branchName"
                  variant="outlined"
                  fullWidth
                  value={formData.branchName}
                  onChange={handleInputChange}
                >
                  {branchOptions.map((branch) => (
                    <MenuItem key={branch} value={branch}>
                      {branch}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Supervisor"
                  name="supervisor"
                  variant="outlined"
                  fullWidth
                  value={formData.supervisor}
                  onChange={handleInputChange}
                >
                  {supervisorOptions.map((supervisor) => (
                    <MenuItem key={supervisor} value={supervisor}>
                      {supervisor}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Add Employee
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEmployeeDialog;
