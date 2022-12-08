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
import thumbsUp from '../../assets/thumbsUp.png';
import thumbsDown from '../../assets/thumbsDown.png';
import CategoryCard from '../atoms/CategoryCard';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import { RefinementList, SearchBox } from 'react-instantsearch-dom';
import { Hits, useHits } from 'react-instantsearch-hooks-web';
import CustomHit from './CustomHit';
import algoliasearch from 'algoliasearch';
import SearchBar from '../molecules/SearchBar';
function Landing() {
  const { user, token } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const Categories = [
    { name: 'Finance', path: 'category/finance', icon: <AiOutlineBank /> },
    { name: 'Travel', path: 'category/travel', icon: <SlPlane /> },
    {
      name: 'Health',
      path: 'category/health',
      icon: <MdOutlineHealthAndSafety />,
    },
    {
      name: 'Education',
      path: 'category/education',
      icon: <TbBooks />,
    },
    { name: 'Food', path: 'category/food', icon: <IoFastFoodOutline /> },
    {
      name: 'Sports',
      path: 'category/health',
      icon: <MdOutlineSportsVolleyball />,
    },
    { name: 'TV', path: 'category/tv', icon: <CgScreen /> },
    {
      name: 'Technology',
      path: 'category/technology',
      icon: <VscCircuitBoard />,
    },
  ];
  const makeReviewHandler = () => {
    if (user && token) {
      navigate('/me');
    } else {
      navigate('/login');
    }
  };
  const searchClient = algoliasearch(
    import.meta.env.VITE_ALGOLIA_APP_ID,
    import.meta.env.VITE_ALGOLIA_SEARCH_KEY
  );

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
            We've created a new reviews app that makes it easy for you to read
            and write business reviews. We think you're going to love it!
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
      </section>
    </>
  );
}

export default Landing;
