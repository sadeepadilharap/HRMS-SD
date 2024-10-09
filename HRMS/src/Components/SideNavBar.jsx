// src/components/SideNavbar.jsx
import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, Avatar, Typography, Divider, IconButton } from '@mui/material';
import { ExpandLess, ExpandMore, Menu as MenuIcon, Dashboard as DashboardIcon, AccountCircle as ProfileIcon } from '@mui/icons-material';
import GroupIcon from '@mui/icons-material/Group';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const SideNavbar = ({ isExpanded, toggleSidebar }) => {
  const [openEmployees, setOpenEmployees] = useState(false);
  const [openPayroll, setOpenPayroll] = useState(false);

  const handleEmployeesClick = () => {
    if (!isExpanded) {
      toggleSidebar(); // Expand if collapsed
    }
    setOpenEmployees(!openEmployees);
  };

  const handlePayrollClick = () => {
    if (!isExpanded) {
      toggleSidebar(); // Expand if collapsed
    }
    setOpenPayroll(!openPayroll);
  };

  return (
    <div className={`${isExpanded ? 'w-64' : 'w-20'} bg-primary h-screen fixed p-4 text-white flex flex-col transition-all duration-300`}>
      {/* Sidebar Toggle Button */}
      <div className="flex items-center justify-between mb-4">
        <Typography variant="h6" className={`${isExpanded ? 'block' : 'hidden'} text-white font-bold`}>Menu</Typography>
        <IconButton onClick={toggleSidebar} className="text-white">
          <MenuIcon />
        </IconButton>
      </div>

      {/* Profile Section (Hidden when sidebar is collapsed) */}
      {isExpanded && (
        <div className="flex items-center p-4 mb-4">
          <Avatar
            alt="User Profile"
            src="https://via.placeholder.com/150" // Placeholder image, replace with user profile image URL
            className="mr-4"
          />
          <div>
            <Typography variant="h6" className="text-white font-bold">John Doe</Typography>
            <Typography variant="body2" className="text-gray-300">Administrator</Typography>
          </div>
        </div>
      )}

      {isExpanded && <Divider className="mb-4" />}

      {/* Navigation Menu */}
      <List component="nav" className="flex-grow">
        {/* Profile */}
        <ListItem button>
          <ProfileIcon className="mr-3" />
          <ListItemText primary="Our Profile" className={`${isExpanded ? 'block' : 'hidden'}`} />
        </ListItem>

        {/* Employees */}
        <ListItem button onClick={handleEmployeesClick}>
          <GroupIcon className="mr-3" />
          <ListItemText primary="Employees" className={`${isExpanded ? 'block' : 'hidden'}`} />
          {isExpanded && (openEmployees ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
        <Collapse in={openEmployees && isExpanded} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className="pl-8 hover:bg-secondary rounded-lg">
              <EventNoteIcon className="mr-2" />
              <ListItemText primary="Leave Requests" />
            </ListItem>
            <ListItem button className="pl-8 hover:bg-secondary rounded-lg">
              <GroupIcon className="mr-2" />
              <ListItemText primary="All Employees" />
            </ListItem>
          </List>
        </Collapse>

        {/* Payroll */}
        <ListItem button onClick={handlePayrollClick}>
          <AttachMoneyIcon className="mr-3" />
          <ListItemText primary="Payroll" className={`${isExpanded ? 'block' : 'hidden'}`} />
          {isExpanded && (openPayroll ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
        <Collapse in={openPayroll && isExpanded} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className="pl-8 hover:bg-secondary rounded-lg">
              <MonetizationOnIcon className="mr-2" />
              <ListItemText primary="Payslip" />
            </ListItem>
            <ListItem button className="pl-8 hover:bg-secondary rounded-lg">
              <MonetizationOnIcon className="mr-2" />
              <ListItemText primary="Employee Salary" />
            </ListItem>
          </List>
        </Collapse>

        {/* Dashboard */}
        <ListItem button>
          <DashboardIcon className="mr-3" />
          <ListItemText primary="Dashboard" className={`${isExpanded ? 'block' : 'hidden'}`} />
        </ListItem>
      </List>

      {/* Logout Button at the Bottom */}
      <div className="p-4 flex items-center justify-center">
        <ListItem button className="hover:bg-secondary rounded-lg flex items-center">
          <ExitToAppIcon className="mr-3" />
          <ListItemText primary="Logout" className={`${isExpanded ? 'block' : 'hidden'}`} />
        </ListItem>
      </div>
    </div>
  );
};

export default SideNavbar;
