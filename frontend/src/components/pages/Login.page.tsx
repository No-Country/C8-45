import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../redux/api/authApi';
import LogInForm from '../organisms/LogInForm';

function Login() {
  const [loginUser,{isLoading,isSuccess,error,isError,data}]=useLoginUserMutation();
  const navigate=useNavigate();
  const location=useLocation();
  useEffect(() => {
    if(isSuccess){
      console.log('success');
    }
    if(isError){
      console.log(error);
    }
  }, [isLoading])


  
  return (
    <section className="min-h-[86vh] flex">
      <div className=" w-full my-auto my-24 ">
        <h2 className="text-center text-3xl font-title my-4">
          Lorem ipsum dolor sit amet.
        </h2>
        <div className="w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12 mx-auto my-auto">
          <LogInForm />
        </div>
      </div>
    </section>
  );
}

export default Login;
