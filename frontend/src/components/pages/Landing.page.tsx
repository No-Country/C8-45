import { AiOutlineBank } from 'react-icons/ai';
import { SlPlane } from 'react-icons/sl';
import {
  MdOutlineHealthAndSafety,
  MdOutlineSportsVolleyball,
} from 'react-icons/md';
import { TbBooks } from 'react-icons/tb';
import { IoFastFoodOutline } from 'react-icons/io5';
import { CgScreen } from 'react-icons/cg';
import { VscCircuitBoard } from 'react-icons/vsc';
import Button from '../atoms/Button';
import SearchBar from '../molecules/SearchBar';
import thumbsUp from '../../assets/thumbsUp.png';
import thumbsDown from '../../assets/thumbsDown.png';
import CategoryCard from '../atoms/CategoryCard';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
function Landing() {
  const { user, token } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const Categories = [
    { name: 'Finance', path: 'finance', icon: <AiOutlineBank /> },
    { name: 'Travel', path: 'travel', icon: <SlPlane /> },
    { name: 'Health', path: 'health', icon: <MdOutlineHealthAndSafety /> },
    {
      name: 'Education',
      path: 'education',
      icon: <TbBooks />,
    },
    { name: 'Food', path: 'food', icon: <IoFastFoodOutline /> },
    { name: 'Sports', path: 'health', icon: <MdOutlineSportsVolleyball /> },
    { name: 'TV', path: 'tv', icon: <CgScreen /> },
    { name: 'Technology', path: 'technology', icon: <VscCircuitBoard /> },
  ];
  const makeReviewHandler = () => {
    if (user && token) {
      navigate('/review-form');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <section className="bg-wavePattern bg-white relative bg-no-repeat bg-bottom h-[86vh] flex flex-col justify-center ">
        <img
          src={thumbsUp}
          alt="thumbs up"
          className="h-44 absolute z-0  hidden sm:block top-5  lg:left-20 "
        />
        <img
          src={thumbsDown}
          alt="thumbs up"
          className="h-44 absolute z-0 top-5 hidden sm:block md:top-20 right-0 lg:right-20 "
        />
        <div className="md:w-6/12 mx-auto z-10">
          <h1 className="text-5xl font-title font-bold text-center leading-snug">
            {`Making client's voices to be listened out loud`}
          </h1>
        </div>
        <div className="md:w-6/12 mx-auto z-10 my-10 z-1">
          <SearchBar />
        </div>
        <div className="md:w-6/12 mx-auto text-center font-poppins my-10 text-lg text-gray-800 flex flex-col">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
            consequatur, aliquid sit iure voluptatem culpa eos commodi similique
            dolorum quidem.
          </p>
          <div className=" md:w-7/12 lg:w-5/12 mx-auto">
            <Button
              type="Secondary"
              value="Make a review ⭐️"
              callback={makeReviewHandler}
            />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto w-full text-center py-10">
          <h2 className="text-3xl font-title  ">Categories</h2>
        </div>
        <div className="py-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-10/12 mx-auto grid-flow-row">
          {Categories.map(({ name, path, icon }) => (
            <CategoryCard title={name} path={path} icon={icon} key={name} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Landing;
