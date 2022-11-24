import UserStatsAvatar from "../molecules/UserStatsAvatar";
import Button from "../atoms/Button";
import { BsStar } from "react-icons/bs";

function UserStats(props: Props) {
  const { name, lastname, image } = props;
  //TODO make a fetch to each user 
  return (
    <div className='flex items-center justify-around'>
      <UserStatsAvatar name={name} lastname={lastname} image={image} />
      <div className='flex flex-col items-center'>
        <div className='flex items-center gap-2'><BsStar /> Reviews</div>
        <div className='font-bold'>36</div>
      </div>
      <Button type='Primary' value='New Review' callback={() => { }} />
    </div>
  )
}

type Props = {
  name ?: string,
  lastname?: string,
  // eslint-disable-next-line react/require-default-props
  image?: string,
}

export default UserStats;
