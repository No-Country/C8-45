import SignUpForm from '../organisms/SignUpForm';

function Signup() {
  return (
    <main className='min-h-screen flex justify-evenly items-center'>
      <div className='w-3/12'>
        <SignUpForm />
      </div>
      <div className='w-3/12 bg-gray-300'>Image or illustration</div>
    </main>
  );
}

export default Signup;
