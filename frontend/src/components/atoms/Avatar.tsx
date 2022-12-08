import defaultAvatar from '../../assets/defaultAvatar.png';
export default function Avatar(props: Props) {
  const { avatar } = props;
  return (
    <div>
      <img
        src={avatar != undefined && avatar.length ? avatar : defaultAvatar}
        alt="user avatar"
        className="min-w-16 h-16"
      />
    </div>
  );
}

type Props = {
  avatar?: string;
};
