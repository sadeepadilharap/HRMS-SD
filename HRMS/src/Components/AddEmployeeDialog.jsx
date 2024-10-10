// src/components/AddEmployeeDialog.jsx
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

const AddEmployeeDialog = ({ open, handleClose }) => {
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
                <TextField label="Employee ID" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="First Name" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Middle Name" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Last Name" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Birth Date"
                  variant="outlined"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Marital Status" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Gender" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Work Email"
                  variant="outlined"
                  fullWidth
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
                />
              </Grid>
            </Grid>

            <Divider className="my-6" />

            <Typography variant="h6" className="text-primary font-bold mb-4 pb-6">
              Emergency Contact Information
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField label="Emergency Contact Name" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Emergency Contact Address"
                  variant="outlined"
                  fullWidth
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
                <TextField label="Section Name" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Department Name" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Branch Name" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Supervisor"
                  variant="outlined"
                  fullWidth
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
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEmployeeDialog;
