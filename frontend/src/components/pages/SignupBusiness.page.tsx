import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterCompanyMutation } from '../../redux/api/authApi';
import SignUpBusinessForm from '../organisms/SignUpBusinessForm';

export default function SignUpBusiness() {
  const navigate = useNavigate();
  const [registerCompany, { error, isLoading, isSuccess, isError, data }] =
    useRegisterCompanyMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate('/login-business');
    }
    if (isError && error) {
      console.log(error);
    }
  }, [isSuccess, isError]);

  return (
    <main className="min-h-screen ">
      <div className="lg:flex my-24">
        <div className="my-3 w-11/12 sm:w-8/12 md:w-5/12 lg:w-4/12 mx-auto">
          <h1 className="font-title lg:text-4xl text-xl ">
            Our app is designed to help business owners connect with customers
            and get feedback on their services.
          </h1>
          <br />
          <p className="font-poppins lg:text-2xl text-xl">
            We are excited to offer business owners the opportunity to create an
            account and share their experiences with customers.
          </p>
        </div>
        <div className="my-3 w-11/12 sm:w-8/12 md:w-5/12 lg:w-1/4 mx-auto lg:ml-0">
        <h2 className="text-center text-3xl font-title my-4">
          Sign up with email
        </h2>
          <SignUpBusinessForm callback={registerCompany} />
        </div>
      </div>
    </main>
  );
}
