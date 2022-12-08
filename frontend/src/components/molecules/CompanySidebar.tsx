import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../atoms/Button';
import { logOut } from '../../redux/features/userSlice';
import { useAppDispatch } from '../../redux/store';
import { NavLink, useNavigate, useNavigation } from 'react-router-dom';
function CompanySidebar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const logOutHandler = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(logOut());
    navigate('/');
  };
  const className = 'bg-gray-100 p-2 text-lg rounded-lg font-poppins my-2';
  const activeClassName = ' bg-indigo-100 text-blue-600 ';
  return (
    <nav className="flex md:flex-col m-3">
      <NavLink
        className={({ isActive }) =>
          isActive ? className + activeClassName : className
        }
        to={'reviews'}
      >
        My reviews
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? className + activeClassName : className
        }
        to={'settings'}
      >
        Settings
      </NavLink>
      <button
        onClick={(e) => logOutHandler(e)}
        className="bg-gray-100 p-2 text-lg rounded-lg font-poppins my-2 text-left"
      >
        Log Out
      </button>
    </nav>
  );
}

export default CompanySidebar;
