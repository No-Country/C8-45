import Avatar from '../atoms/Avatar';

function UserStatsAvatar(props: Props) {
  const { name, lastname, image } = props;
  return (
    <div className="flex items-center gap-2">
      <Avatar size="medium" name={name} lastname={lastname} image={image} />
      <div>
        <div>{name + ' ' + lastname}</div>
        <div>Country</div>
      </div>
    </div>
  );
}

type Props = {
  name: string;
  lastname: string;
  // eslint-disable-next-line react/require-default-props
  image?: string;
};

export default UserStatsAvatar;
