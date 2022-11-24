import React from 'react'
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import UserSidebar from '../molecules/UserSidebar';
import UserStats from '../organisms/UserStats';

const User = () => {
  const user=useAppSelector(state=>state.auth.user)
  
  return (
    <section className='py-10'>
      <UserStats name={user?.name} lastname={user?.lastName} />
      <div className='flex mx-auto w-9/12 my-10 divide-y-2'>
        <aside>
          <UserSidebar/>
        </aside>
        <main>
          <Outlet/>
        </main>
      </div>
    </section>
  )
}

export default User;