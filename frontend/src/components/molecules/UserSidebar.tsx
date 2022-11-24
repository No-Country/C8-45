import { useDispatch } from 'react-redux';
import Button from '../atoms/Button';
import {logout} from '../../redux/features/userSlice'
function UserSidebar() {
  const dispatch=useDispatch;
  
  return (
    <div className="flex flex-col m-3">
      <Button callback={() => {}} type="Tertiary" value="Your Reviews" />
      <Button callback={() => {}} type="Tertiary" value="Settings" />
      <Button callback={()=>{}} type="Tertiary" value="Log Out" />
    </div>
  );
}

export default UserSidebar;
