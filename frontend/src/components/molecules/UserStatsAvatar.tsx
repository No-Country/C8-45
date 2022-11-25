import { useAppSelector } from '../../redux/store';
import Avatar from '../atoms/Avatar';

function UserStatsAvatar() {
  const {user}=useAppSelector(state=>state.auth);
  
  if(user?.name&&user.lastName){
    return (
      <div className="flex items-center  gap-2">
        <Avatar/>
        <div>
          <div>{user?.name + ' ' + user.lastName}</div>
          <div>Country</div>
        </div>
      </div>
    );
  }else{
    return null;
  }
  
}


export default UserStatsAvatar;
