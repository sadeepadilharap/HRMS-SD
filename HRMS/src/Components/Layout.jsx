// src/components/Layout.jsx
import React from 'react';
import SideNavbar from './SideNavbar';
import UpperNavbar from './UpperNavbar';

const Layout = ({ children, isSidebarExpanded, toggleSidebar }) => {
  return (
    <div className="flex">
      <SideNavbar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      <div className={`${isSidebarExpanded ? 'ml-64' : 'ml-20'} transition-all duration-300 flex-1`}>
        <UpperNavbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
