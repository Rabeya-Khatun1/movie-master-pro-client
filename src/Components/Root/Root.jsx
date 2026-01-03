import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
  const [activeSection, setActiveSection] = useState('banner');

  return (
    <div>
      <ToastContainer />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Outlet context={{ setActiveSection }} />
      <Footer />
    </div>
  );
};

export default Root;
