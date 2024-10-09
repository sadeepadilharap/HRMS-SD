// src/pages/Profile.jsx
import React from 'react';
import { TextField, Grid, Typography, Card, CardContent, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupIcon from '@mui/icons-material/Group';

const Profile = () => {
  return (
    <div className="p-6 bg-background min-h-screen flex flex-col items-center">
      {/* Profile Header */}
      <Card className="w-full max-w-4xl mb-6 shadow-lg">
        <CardContent className="text-center">
          <AccountCircleIcon fontSize="large" className="text-primary mb-2" />
          <Typography variant="h5" className="text-text font-bold">Employee Profile</Typography>
          <Typography variant="subtitle1" className="text-accent">
            Update your personal and employment details
          </Typography>
        </CardContent>
      </Card>

      {/* Profile Form */}
      <Card className="w-full max-w-4xl shadow-lg">
        <CardContent>
          <Typography variant="h6" className="text-primary font-bold mb-4">Personal Information</Typography>

          <Grid container spacing={4}>
            {/* Employee ID */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Employee ID"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* First Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* Middle Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Middle Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* Last Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* Birth Date */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Birth Date"
                variant="outlined"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
            {/* Martial Status */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Marital Status"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* Gender */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Gender"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* Work Email */}
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
            {/* Address */}
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
            {/* Telephone Number */}
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
            {/* Recruitment Date */}
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

          <Typography variant="h6" className="text-primary font-bold mb-4">Emergency Contact Information</Typography>
          <Grid container spacing={4}>
            {/* Emergency Contact Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Emergency Contact Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* Emergency Contact Address */}
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
            {/* Emergency Contact Telephone */}
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

          <Typography variant="h6" className="text-primary font-bold mb-4">Employment Details</Typography>
          <Grid container spacing={4}>
            {/* Section Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Section Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* Department Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Department Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* Branch Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Branch Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* Supervisor Name */}
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
    </div>
  );
};

export default Profile;
