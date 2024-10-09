// src/components/Layout.jsx
import React from 'react';
import SideNavbar from './SideNavbar';
import UpperNavbar from './UpperNavbar';

const Layout = ({ children, isSidebarExpanded, toggleSidebar }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SideNavbar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      
      {/* Main Content Area */}
      <div className={`${isSidebarExpanded ? 'ml-64' : 'ml-20'} transition-all duration-300 flex-1`}>
        
        {/* Upper Navbar with fixed positioning */}
        <div className="fixed w-full z-10">
          <UpperNavbar />
        </div>
        
        {/* Main content, offset to account for the fixed navbar */}
        <main className="p-6 mt-16">{children}</main> {/* mt-16 adds margin to avoid overlap */}
      </div>
    </div>
  );
};

export default Layout;
