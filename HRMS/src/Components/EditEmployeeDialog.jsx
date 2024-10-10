// src/components/EditEmployeeDialog.jsx
import React from 'react';
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
  CardContent
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GroupIcon from '@mui/icons-material/Group';

const EditEmployeeDialog = ({ open, handleClose, employee }) => {
  if (!employee) return null; // Return null if no employee is provided

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Employee Details</DialogTitle>
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
                  defaultValue={employee.employeeId}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  defaultValue={employee.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Middle Name"
                  variant="outlined"
                  fullWidth
                  defaultValue={employee.middleName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  defaultValue={employee.lastName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Birth Date"
                  variant="outlined"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  defaultValue={employee.birthDate}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Marital Status"
                  variant="outlined"
                  fullWidth
                  defaultValue={employee.maritalStatus}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Gender"
                  variant="outlined"
                  fullWidth
                  defaultValue={employee.gender}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Work Email"
                  variant="outlined"
                  fullWidth
                  defaultValue={employee.email}
                  InputProps={{
                    startAdornment: <EmailIcon className="mr-2 text-primary" />
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  variant="outlined"
                  fullWidth
                  defaultValue={employee.address}
                  InputProps={{
                    startAdornment: <HomeIcon className="mr-2 text-primary" />
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Telephone Number"
                  variant="outlined"
                  fullWidth
                  defaultValue={employee.phone}
                  InputProps={{
                    startAdornment: <PhoneIcon className="mr-2 text-primary" />
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Recruitment Date"
                  variant="outlined"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  defaultValue={employee.recruitmentDate}
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
                  variant="outlined"
                  fullWidth
                  defaultValue={employee.emergencyContact.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Emergency Contact Address"
                  variant="outlined"
                  fullWidth
                  defaultValue={employee.emergencyContact.address}
                  InputProps={{
                    startAdornment: <HomeIcon className="mr-2 text-primary" />
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Emergency Contact Phone"
                  variant="outlined"
                  fullWidth
                  defaultValue={employee.emergencyContact.phone}
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
                  label="Section Name"
                  variant="outlined"
                  fullWidth
                  defaultValue={employee.sectionName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Department Name"
                  variant="outlined"
                  fullWidth
                  defaultValue={employee.departmentName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Branch Name"
                  variant="outlined"
                  fullWidth
                  defaultValue={employee.branchName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Supervisor"
                  variant="outlined"
                  fullWidth
                  defaultValue={employee.supervisor}
                  InputProps={{
                    startAdornment: <GroupIcon className="mr-2 text-primary" />
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditEmployeeDialog;
