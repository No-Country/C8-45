import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import Logo from '../atoms/Logo';
import NavigationLink from '../atoms/NavigationLink';
import UserNavbar from '../molecules/UserNavbar';
import ResponsiveNavbar from './ResponsiveNavbar';

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const closeMenu = () => {
    setOpen(!open);
  };
  let isLogged = false;
  const { user, token } = useAppSelector((state) => state.auth);
  //Logged user
  return (
    <>
      <nav className="hidden md:flex items-center p-1 md:p-5 justify-between relative">
        <div className="flex justify-between p-5 items-center md:order-2">
          <Logo type="light" />
        </div>
        {open && (
          <>
            <UserNavbar />
            {!user || !token ? (
              <ul className="flex flex-col md:flex-row items-center  bg-white  ">
                <li className=" md:mx-4">
                  <NavigationLink path="for-business" value="For business" />
                </li>
              </ul>
            ) : null}
          </>
        )}
      </nav>
      <ResponsiveNavbar />
    </>
  );
}

export default Navbar;
