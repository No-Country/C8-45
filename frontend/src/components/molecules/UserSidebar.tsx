import { useDispatch } from 'react-redux';
import Button from '../atoms/Button';
import { logout } from '../../redux/features/userSlice';
import { NavLink } from 'react-router-dom';
function UserSidebar() {
  const dispatch = useDispatch;
  dispatch();
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
      <button className="bg-gray-100 p-2 text-lg rounded-lg font-poppins my-2 text-left">
        Log Out
      </button>
    </nav>
  );
}

export default UserSidebar;
