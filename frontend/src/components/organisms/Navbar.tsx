import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import Logo from '../atoms/Logo';
import NavigationLink from '../atoms/NavigationLink';
import NavResButton from '../atoms/NavResButton';
import ResponsiveNavbar from './ResponsiveNavbar';

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const closeMenu = () => {
    setOpen(!open);
  };
  // Todo make a method to close menu on link click
  // Todo make it responsive
  return (
    <>
      <nav className="hidden md:flex items-center p-1 md:p-5 justify-between relative  ">
        <div className="flex justify-between p-5 items-center md:order-2">
          <Logo type="light" />
        </div>
        {open ? (
          <>
            <ul className="flex flex-col md:flex-row items-center  md:order-3 bg-white ">
              <li className="m-4 md:mx-4">
                <NavigationLink path="login" value="Log In" />
              </li>
              <li className="mx-4">
                <Button
                  value="Sign Up"
                  type="Secondary"
                  callback={() => navigate('signup')}
                />
              </li>
            </ul>
            <ul className="flex flex-col md:flex-row items-center  bg-white  ">
              <li className="m-4 md:mx-4">
                <NavigationLink path="how-it-works" value="How it works?" />
              </li>
              <li className=" md:mx-4">
                <NavigationLink path="business" value="For business" />
              </li>
            </ul>
          </>
        ) : null}
      </nav>
      <ResponsiveNavbar />
    </>
  );
}

export default Navbar;
