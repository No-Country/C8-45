import UserStats from '../organisms/UserStats';
import UserSidebar from '../molecules/UserSidebar';
import UserSettings from '../organisms/UserSettings';

function Settings() {
  return (
    <div>
      <UserStats name='John' lastname='Doe' />
      <div className='flex mx-44 my-8 gap-8'>
        <div className='w-1/3 border-r-2'><UserSidebar /></div>
        <div className='w-2/3'><UserSettings name='John' lastname='Doe' /></div>
      </div>
    </div>
  )
}

export default Settings;
