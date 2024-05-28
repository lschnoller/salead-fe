import React from 'react';
import Link from 'next/link';
import { DashboardOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div className={`w-64 bg-white shadow-lg fixed inset-y-0 left-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-200 ease-in-out md:translate-x-0`}>
    <div className="p-6">
      <h2 className="text-2xl font-bold">Salead</h2>
    </div>
    <ul className="mt-6 space-y-2">
      <li className="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
        <DashboardOutlined className="mr-3" />
        <span>Dashboard</span>
      </li>
      <li className="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
        <UserOutlined className="mr-3" />
        <span>Users</span>
      </li>
      <li className="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
        <SettingOutlined className="mr-3" />
        <span>Settings</span>
      </li>
      <li className="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
        <LogoutOutlined className="mr-3" />
        <span>Logout</span>
      </li>
    </ul>
  </div>
);

export default Sidebar;