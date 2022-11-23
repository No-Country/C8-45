import Button from "../atoms/Button";

function UserSidebar() {
  return (
    <div className='flex flex-col m-3'>
      <Button callback={() => { }} type='Tertiary' value='Your Reviews' />
      <Button callback={() => { }} type='Tertiary' value='Settings' />
      <Button callback={() => { }} type='Tertiary' value='Log Out' />
    </div>
  )
}

export default UserSidebar;
