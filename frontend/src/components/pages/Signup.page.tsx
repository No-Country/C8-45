import SignUpForm from '../organisms/SignUpForm';
import { useRegisterUserMutation } from '../../redux/api/authApi';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function Signup() {
  const navigate = useNavigate();
  const [registerUser, { error, isLoading, isSuccess, isError, data }] =
    useRegisterUserMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate('/login');
    }
    if (isError && error) {
      console.log(error.data);
    }
  }, [isSuccess, isError]);

  return (
    <section className="w-full flex-col h-[84vh]  flex md:flex-row items-center justify-center my-auto">
      <div className="w-full md:w-6/12">
        <div className="w-10/12 sm:w-7/12 sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto">
        <h2 className="text-center text-3xl font-title my-4">
          Sign up as a user.
        </h2>
          <SignUpForm callback={registerUser} />
          <div className="mx-auto">
            {isError && error && (
              <div className="text-center bg-red-200 rounded-lg p-3 text-red-600">
                {error.data}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-4/12">
        <h2 className="font-title text-3xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          tempora nam labore laborum fugit{' '}
          <span className="text-blue-600">
            quaerat eligendi esse perferendis libero voluptate!
          </span>
          {isLoading && <span>Loading</span>}
        </h2>
      </div>
    </section>
  );
}

export default Signup;
