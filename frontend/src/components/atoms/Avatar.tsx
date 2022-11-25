import { useAppSelector } from '../../redux/store';
import defaultAvatar from '../../assets/defaultAvatar.png';
export default function Avatar() {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div>
      <img
        src={!user?.avatar ? defaultAvatar : user.avatar}
        alt="user avatar"
        className="min-w-16 h-16"
      />
    </div>
  );
}
