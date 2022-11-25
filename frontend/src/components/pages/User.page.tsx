import React from 'react'
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import UserSidebar from '../molecules/UserSidebar';
import UserStats from '../organisms/UserStats';

const MyProfile = () => {
  const user=useAppSelector(state=>state.auth.user)
  
  return (
    <section className='py-10'>
      <UserStats name={user?.name} lastname={user?.lastName} />
      <div className='flex mx-auto w-9/12 my-10 divide-x-2 '>
        <aside className='w-3/12'>
          <UserSidebar/>
        </aside>
        <main className='w-8/12'>
          <Outlet/>
        </main>
      </div>
    </section>
  )
}

export default MyProfile;