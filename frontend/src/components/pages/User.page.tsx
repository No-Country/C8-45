import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import UserSidebar from '../molecules/UserSidebar';
import UserStats from '../organisms/UserStats';

const MyProfile = () => {
  const navigate = useNavigate();
  const { user, token } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (!user && !token) {
      navigate('/login');
    }
  }, [user]);

  return (
    <section className="py-10">
      <UserStats />
      <div className="flex flex-col md:flex-row mx-auto lg:w-9/12 my-10 divide-x-2 ">
        <aside className="hidden md:block md:w-3/12 lg:w-3/12 ">
          <UserSidebar />
        </aside>
        <main className="md:w-9/12 md:p-4">
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default MyProfile;
