import React, { useRef } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userApi from '../../redux/api/userApi';
import { setCredentials } from '../../redux/features/userSlice';
import { useAppSelector } from '../../redux/store';
import Button from '../atoms/Button';
import NavigationLink from '../atoms/NavigationLink';
import UserNavButton from './UserNavButton';

const UserNavbar = () => {
  const navigate = useNavigate();
  const auth_token = localStorage.getItem('auth_token');
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.auth);
  dispatch(setCredentials({ ...user, token: auth_token }));
  const { isLoading, isFetching } = userApi.endpoints.getCurrentUser.useQuery(
    null,
    { skip: false, refetchOnMountOrArgChange: true }
  );
  const { data } = userApi.endpoints.getCurrentUser.useQueryState(null, {
    selectFromResult: (data) => data,
  });
  const loading = isLoading || isFetching;

  if (loading) {
    return (
      <div className="md:order-3 w-2/12 p-3 rounded-full bg-blue-100">
        <span className="animate-spin flex justify-center text-2xl text-center text-blue-600">
          <CgSpinner />
        </span>
      </div>
    );
  }
  if (user.user && user.token) {
    return (
      <UserNavButton
        name={user?.user.name}
        id={user?.user.id}
        avatar={user.user.avatar}
      />
    );
  } else {
    return (
      <ul className="flex flex-col md:flex-row items-center font-poppins md:order-3 bg-white ">
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
    );
  }
};

export default UserNavbar;
