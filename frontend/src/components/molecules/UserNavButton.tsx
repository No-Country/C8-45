import React from 'react'
import defaultAvatar from '../../assets/defaultAvatar.png'

type Props={
    name:string|undefined;
    id:string|undefined;
    avatar:string|undefined;
}
//Todo fetch on login
const UserNavButton = (props:Props) => {
    const {name,id,avatar}=props;
  return (
    <button className='flex md:flex-row items-center font-poppins md:order-3 bg-white bg-indigo-100 p-1 rounded-full'>
        <div><img src={avatar?avatar:defaultAvatar} className="h-12" alt="" /></div>
        <div className='mx-2'><span>{name}</span></div>
    </button>
  )
}

export default UserNavButton