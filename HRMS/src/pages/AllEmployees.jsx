// src/pages/AllEmployees.jsx
import React, { useState } from 'react';
import {
    TextField, IconButton, MenuItem, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Typography
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';

import AddEmployeeDialog from '../Components/AddEmployeeDialog';
import ViewMoreDialog from '../Components/ViewMoreDialog';
import EditEmployeeDialog from '../Components/EditEmployeeDialog';

const employees = [
    { id: 'E001', name: 'John Doe', email: 'john@example.com', phone: '555-555-1234', role: 'Developer', image: 'https://via.placeholder.com/50' },
    { id: 'E002', name: 'Jane Smith', email: 'jane@example.com', phone: '555-555-5678', role: 'Designer', image: 'https://via.placeholder.com/50' },
    { id: 'E003', name: 'Mark Johnson', email: 'mark@example.com', phone: '555-555-9876', role: 'Project Manager', image: 'https://via.placeholder.com/50' },
];

const AllEmployees = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchBy, setSearchBy] = useState('name');
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [openViewDialog, setOpenViewDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleSearchByChange = (event) => {
        setSearchBy(event.target.value);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleAddNew = () => {
        console.log("Add new employee clicked"); // For debugging
        setOpenAddDialog(true);
    };

    const handleViewMore = (employee) => {
        console.log("View more clicked for", employee); // For debugging
        setSelectedEmployee({
            employeeId: employee.id,
            name: employee.name,
            email: employee.email,
            phone: employee.phone,
            role: employee.role,
            emergencyContact: {
                name: 'Jane Doe', // Placeholder, replace with actual data
                address: '456 Elm St, Anytown, USA', // Placeholder
                phone: '(987) 654-3210' // Placeholder
            },
            sectionName: 'IT Department', // Placeholder
            departmentName: 'Technology', // Placeholder
            branchName: 'Main Branch', // Placeholder
            supervisor: 'Alice Smith', // Placeholder
            birthDate: '1990-01-01', // Placeholder
            maritalStatus: 'Single', // Placeholder
            gender: 'Male', // Placeholder
            workEmail: 'john.doe@example.com', // Placeholder
            address: '123 Main St, Anytown, USA', // Placeholder
            telephoneNumber: '(123) 456-7890', // Placeholder
            recruitmentDate: '2022-01-01' // Placeholder
        });
        setOpenViewDialog(true);
    };

    const handleEdit = (employee) => {
        console.log("Edit clicked for", employee); // For debugging
        setSelectedEmployee({
            employeeId: employee.id,
            name: employee.name,
            email: employee.email,
            phone: employee.phone,
            role: employee.role,
            emergencyContact: {
                name: 'Jane Doe', // Placeholder, replace with actual data
                address: '456 Elm St, Anytown, USA', // Placeholder
                phone: '(987) 654-3210' // Placeholder
            },
            sectionName: 'IT Department', // Placeholder
            departmentName: 'Technology', // Placeholder
            branchName: 'Main Branch', // Placeholder
            supervisor: 'Alice Smith', // Placeholder
            birthDate: '1990-01-01', // Placeholder
            maritalStatus: 'Single', // Placeholder
            gender: 'Male', // Placeholder
            workEmail: 'john.doe@example.com', // Placeholder
            address: '123 Main St, Anytown, USA', // Placeholder
            telephoneNumber: '(123) 456-7890', // Placeholder
            recruitmentDate: '2022-01-01' // Placeholder
        });
        setOpenEditDialog(true);
    };

    return (
        <div className="p-6 bg-background min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <Typography variant="h4" className="font-bold text-primary">
                    All Employees
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={handleAddNew}
                    className="bg-primary hover:bg-accent"
                >
                    Add Employee
                </Button>
            </div>

            {/* Search and Dropdown */}
            <div className="flex justify-between mb-4">
                <div className="flex items-center space-x-4">
                    <TextField
                        label="Search Employees"
                        variant="outlined"
                        value={searchQuery}
                        onChange={handleSearch}
                        InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            ),
                        }}
                        className="w-96"
                    />

                    <Select
                        value={searchBy}
                        onChange={handleSearchByChange}
                        variant="outlined"
                        className="bg-white"
                    >
                        <MenuItem value="name">Name</MenuItem>
                        <MenuItem value="employeeId">Employee ID</MenuItem>
                        <MenuItem value="email">Email</MenuItem>
                        <MenuItem value="role">Role</MenuItem>
                    </Select>
                </div>
            </div>

            {/* Employee Table */}
            <TableContainer className="shadow-lg">
                <Table>
                    <TableHead>
                        <TableRow className="bg-gray-100">
                            <TableCell><strong>Profile</strong></TableCell>
                            <TableCell><strong>Name</strong></TableCell>
                            <TableCell><strong>Email</strong></TableCell>
                            <TableCell><strong>Employee ID</strong></TableCell>
                            <TableCell><strong>Phone</strong></TableCell>
                            <TableCell><strong>Role</strong></TableCell>
                            <TableCell><strong>Actions</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map((employee) => (
                            <TableRow key={employee.id} className="hover:bg-gray-50 transition duration-300">
                                <TableCell>
                                    <Avatar src={employee.image} alt={employee.name} />
                                </TableCell>
                                <TableCell>{employee.name}</TableCell>
                                <TableCell>{employee.email}</TableCell>
                                <TableCell>{employee.id}</TableCell>
                                <TableCell>{employee.phone}</TableCell>
                                <TableCell>{employee.role}</TableCell>
                                <TableCell>
                                    <IconButton color="primary" className="mr-2" onClick={() => handleViewMore(employee)}>
                                        <MoreHorizIcon />
                                    </IconButton>
                                    <IconButton color="secondary" className="mr-2" onClick={() => handleEdit(employee)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton style={{ color: 'red' }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Add New Employee Dialog */}
            {openAddDialog && (
                <AddEmployeeDialog open={openAddDialog} handleClose={() => setOpenAddDialog(false)} />
            )}

            {/* View More Dialog */}
            {openViewDialog && selectedEmployee && (
                <ViewMoreDialog open={openViewDialog} handleClose={() => setOpenViewDialog(false)} employee={selectedEmployee} />
            )}

            {/* Edit Employee Dialog */}
            {openEditDialog && selectedEmployee && (
                <EditEmployeeDialog open={openEditDialog} handleClose={() => setOpenEditDialog(false)} employee={selectedEmployee} />
            )}
        </div>
    );
};

export default AllEmployees;
