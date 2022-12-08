import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import Button from '../atoms/Button';
import Logo from '../atoms/Logo';
import NavigationLink from '../atoms/NavigationLink';
import NavResButton from '../atoms/NavResButton';
import UserNavButton from '../molecules/UserNavButton';
import { LogOutButton } from '../molecules/UserSidebar';

function ResponsiveNavbar() {
  const [open, setOpen] = useState(false);
  const openNavbar = () => {
    setOpen(!open);
  };
  const className = 'bg-gray-100 p-2 text-lg rounded-lg font-poppins my-2';
  const activeClassName = ' bg-indigo-100 text-blue-600 ';
  const { user, token } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <nav className="mb-2 fixed bg-white w-full z-20 bg-white">
      <div className="flex justify-between md:hidden p-4">
        <Logo type="light" />
        <NavResButton open={open} callback={openNavbar} />
      </div>
      {open ? (
        <div className=" flex justify-center fixed bg-white w-full z-30 md:hidden">
          {!user && !token ? (
            <ul className="flex flex-col items-center my-4">
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
          ) : (
            <ul className="flex flex-col items-center">
              <li className="mb-5">
                <UserNavButton
                  name={user?.name}
                  avatar={user?.avatar}
                  id={user?.id}
                />
              </li>
              <li className="mb-5">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? className + activeClassName : className
                  }
                  to={'/me/reviews'}
                >
                  My reviews
                </NavLink>
              </li>
              <li className="">
                <LogOutButton />
              </li>
            </ul>
          )}
        </div>
      ) : null}
    </nav>
  );
}

export default ResponsiveNavbar;
