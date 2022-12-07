import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import Logo from '../atoms/Logo';
import NavigationLink from '../atoms/NavigationLink';
import NavResButton from '../atoms/NavResButton';

function ResponsiveNavbar() {
  const [open, setOpen] = useState(false);
  const openNavbar = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  return (
    <nav className="mb-2 fixed bg-white w-full z-20 bg-white">
      <div className="flex justify-between md:hidden p-4">
        <Logo type="light" />
        <NavResButton open={open} callback={openNavbar} />
      </div>
      {open ? (
        <div className=" flex justify-center fixed bg-white w-full z-30 md:hidden">
          <ul className="flex flex-col items-center my-4">
            <li className="mb-3">
              <NavigationLink path="how-it-works" value="How it works?" />
            </li>
            <li className="my-2">
              <NavigationLink path="for-business" value="For business" />
            </li>
            <li className="my-3">
              <NavigationLink path="login" value="Log In" />
            </li>

            <li className="">
              <Button
                value="Sign Up"
                type="Secondary"
                callback={() => navigate('signup')}
              />
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
}

export default ResponsiveNavbar;
