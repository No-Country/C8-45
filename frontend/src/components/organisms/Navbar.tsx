import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userApi from '../../redux/api/userApi';
import { setCredentials } from '../../redux/features/userSlice';
import Button from '../atoms/Button';
import Logo from '../atoms/Logo';
import NavigationLink from '../atoms/NavigationLink';
import NavResButton from '../atoms/NavResButton';
import UserNavbar from '../molecules/UserNavbar';
import ResponsiveNavbar from './ResponsiveNavbar';

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const closeMenu = () => {
    setOpen(!open);
  };
  //Logged user
  return (
    <>
      <nav className="hidden md:flex items-center p-1 md:p-5 justify-between relative">
        <div className="flex justify-between p-5 items-center md:order-2">
          <Logo type="light" />
        </div>
        {open && (
          <>
            <UserNavbar/>
            <ul className="flex flex-col md:flex-row items-center  bg-white  ">
              <li className="m-4 md:mx-4">
                <NavigationLink path="how-it-works" value="How it works?" />
              </li>
              <li className=" md:mx-4">
                <NavigationLink path="business" value="For business" />
              </li>
            </ul>
          </>
        ) }
      </nav>
      <ResponsiveNavbar />
    </>
  );
}

export default Navbar;
