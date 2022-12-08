import Button from '../atoms/Button';
import thumbsUp from '../../assets/thumbsUp.png';
import thumbsDown from '../../assets/thumbsDown.png';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import SearchBar from '../molecules/SearchBar';
function Landing() {
  const { user, token } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const makeReviewHandler = () => {
    if (user && token) {
      navigate('/me');
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
    </>
  );
}

export default Landing;
