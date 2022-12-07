import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import LogInBusinessForm from '../organisms/LogInBusinessForm';

function LogInBusiness() {
  const { user, token } = useAppSelector(state => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && token) {
      navigate(`/my-company/reviews`);
    }
  }, [user, token]);

  return (
    <section className="w-full flex-col h-[84vh]  flex md:flex-row items-center justify-center my-auto">
      <div className="w-full md:w-6/12">
        <h2 className="text-center text-3xl font-title my-4">
          Log in as a Business
        </h2>
        <div className="w-10/12 sm:w-7/12 md:w-8/12 lg:w-6/12 mx-auto">
          <LogInBusinessForm />
          Don't have an account? <Link to='/signup-business' className='text-blue-600 hover:underline'>Sign up for free now.</Link>
        </div>   
      </div>
      <div className="hidden md:block md:w-1/4">
        <img
          className="rounded-r-3xl"
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
        />
      </div>
    </section>
  );
};

export default LogInBusiness;
