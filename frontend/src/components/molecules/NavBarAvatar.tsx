import Avatar from "../atoms/Avatar";

function NavBarAvatar(props: Props) {
  const { name, lastname, image } = props;

  return (
    <div className="flex items-center gap-2">
      <span>{name + " " + lastname}</span>
      <div><Avatar size='small' name={name} lastname={lastname} image={image} /></div>
    </div>
  )
};

type Props = {
  name: string,
  lastname: string,
  // eslint-disable-next-line react/require-default-props
  image?: string,
}

export default NavBarAvatar;
