import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { UserOutlined } from '@ant-design/icons';

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleSignOut = () => {
    // Logic for sign out
    console.log("Sign out");
  };

  return (

    <header className="bg-white shadow-md p-4 h-16">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Header</h1>
        <div className="relative">
          <UserOutlined style={{ fontSize: '24px', color: '#1890ff' }} onClick={toggleModal} />
          {isModalOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
              <ul>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={handleSignOut}>Sign Out</li>
              </ul>
            </div>
          )}
        </div>  
      </div>
  </header>
  );
};

export default Header;
