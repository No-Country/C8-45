import LogInForm from '../organisms/LogInForm';

function Login() {
  return (
    <main className="min-h-screen ">
      <div className=" w-full my-auto my-24 ">
        <div className="w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12 mx-auto my-auto">
          <LogInForm />
        </div>
      </div>
    </main>
  );
}

export default Login;
