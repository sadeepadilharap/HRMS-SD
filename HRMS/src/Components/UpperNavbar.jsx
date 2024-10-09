// src/components/UpperNavbar.jsx
import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const UpperNavbar = () => {
  return (
    <AppBar position="static" className="bg-primary">
      <Toolbar className="flex justify-between">
        {/* Company Logo on the left */}
        <div className="text-white text-2xl font-bold">Company Logo</div>

        {/* Logout button on the right */}
        <IconButton color="inherit">
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default UpperNavbar;
