// src/pages/Profile.jsx
import React from 'react';
import { Typography, Card, CardContent, Divider, Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Profile = () => {
    // Sample data to display
    const userDetails = {
        employeeId: "E12345",
        firstName: "John",
        middleName: "M.",
        lastName: "Doe",
        birthDate: "1990-01-01",
        maritalStatus: "Single",
        gender: "Male",
        workEmail: "john.doe@example.com",
        address: "123 Main St, Anytown, USA",
        telephoneNumber: "(123) 456-7890",
        recruitmentDate: "2022-01-01",
        emergencyContact: {
            name: "Jane Doe",
            address: "456 Elm St, Anytown, USA",
            phone: "(987) 654-3210"
        },
        sectionName: "IT Department",
        departmentName: "Technology",
        branchName: "Main Branch",
        supervisor: "Alice Smith"
    };

    return (
        <div className="p-6 bg-background min-h-screen flex flex-col items-center">
            {/* Profile Header */}
            <Card className="w-full max-w-4xl mb-6 shadow-lg">
                <CardContent className="text-center">
                    <AccountCircleIcon fontSize="large" className="text-primary mb-2" />
                    <Typography variant="h5" className="text-text font-bold">Employee Profile</Typography>
                    <Typography variant="subtitle1" className="text-accent">
                        View your personal and employment details
                    </Typography>
                </CardContent>
            </Card>

            {/* Profile Details */}
            <Card className="w-full max-w-4xl shadow-lg">
                <CardContent>
                    <Typography variant="h6" className="text-primary font-bold mb-4 pb-6">Personal Information</Typography>

                    <Grid container spacing={4}>
                        {/* Employee ID */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="text-text">
                                <strong>Employee ID:</strong> {userDetails.employeeId}
                            </Typography>
                        </Grid>
                        {/* First Name */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="text-text">
                                <strong>First Name:</strong> {userDetails.firstName}
                            </Typography>
                        </Grid>
                        {/* Middle Name */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="text-text">
                                <strong>Middle Name:</strong> {userDetails.middleName}
                            </Typography>
                        </Grid>
                        {/* Last Name */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="text-text">
                                <strong>Last Name:</strong> {userDetails.lastName}
                            </Typography>
                        </Grid>
                        {/* Birth Date */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="text-text">
                                <strong>Birth Date:</strong> {userDetails.birthDate}
                            </Typography>
                        </Grid>
                        {/* Marital Status */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="text-text">
                                <strong>Marital Status:</strong> {userDetails.maritalStatus}
                            </Typography>
                        </Grid>
                        {/* Gender */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="text-text">
                                <strong>Gender:</strong> {userDetails.gender}
                            </Typography>
                        </Grid>
                        {/* Work Email */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="text-text">
                                <strong>Work Email:</strong> {userDetails.workEmail}
                            </Typography>
                        </Grid>
                        {/* Address */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="text-text">
                                <strong>Address:</strong> {userDetails.address}
                            </Typography>
                        </Grid>
                        {/* Telephone Number */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="text-text">
                                <strong>Telephone Number:</strong> {userDetails.telephoneNumber}
                            </Typography>
                        </Grid>
                        {/* Recruitment Date */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="text-text">
                                <strong>Recruitment Date:</strong> {userDetails.recruitmentDate}
                            </Typography>
                        </Grid>
                    </Grid>

                    <div className="mt-10">
                        <Divider className="mb-6" />
                    </div>

                    <Typography variant="h6" className="text-primary font-bold mb-4 pt-10 pb-6">Emergency Contact Information</Typography>
                    <Grid container spacing={4}>
                        {/* Emergency Contact Name */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="text-text">
                                <strong>Emergency Contact Name:</strong> {userDetails.emergencyContact.name}
                            </Typography>
                        </Grid>
                        {/* Emergency Contact Address */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="text-text">
                                <strong>Emergency Contact Address:</strong> {userDetails.emergencyContact.address}
                            </Typography>
                        </Grid>
                        {/* Emergency Contact Telephone */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="text-text">
                                <strong>Emergency Contact Phone:</strong> {userDetails.emergencyContact.phone}
                            </Typography>
                        </Grid>
                    </Grid>

                    <div className="mt-10">
                        <Divider className="mb-6" />
                    </div>


                    <Typography variant="h6" className="text-primary font-bold mb-4 pt-10 pb-6">Employment Details</Typography>
                    <Grid container spacing={4}>
                        {/* Section Name */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="text-text">
                                <strong>Section Name:</strong> {userDetails.sectionName}
                            </Typography>
                        </Grid>
                        {/* Department Name */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="text-text">
                                <strong>Department Name:</strong> {userDetails.departmentName}
                            </Typography>
                        </Grid>
                        {/* Branch Name */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="text-text">
                                <strong>Branch Name:</strong> {userDetails.branchName}
                            </Typography>
                        </Grid>
                        {/* Supervisor Name */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="text-text">
                                <strong>Supervisor:</strong> {userDetails.supervisor}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
};

export default Profile;
