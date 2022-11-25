import UserStatsAvatar from "../molecules/UserStatsAvatar";
import Button from "../atoms/Button";
import { BsStar } from "react-icons/bs";

function UserStats(props: Props) {
  const { name, lastname, image } = props;
  //TODO make a fetch to each user 
  return (
    <div className='flex items-center justify-around bg-indigo-50 p-10 lg:w-9/12 mx-auto rounded-2xl'>
      <UserStatsAvatar />
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
  image?: string,
}

export default UserStats;
