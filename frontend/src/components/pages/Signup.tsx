import SignUpForm from '../organisms/SignUpForm';

function Signup() {
  return (
    <section className="w-full flex-col h-[84vh]  flex md:flex-row items-center justify-center my-auto">
      <div className="w-full md:w-6/12">
        <div className="w-10/12 sm:w-7/12 sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto">
          <SignUpForm />
        </div>
      </div>
      <div className="hidden md:block md:w-4/12">
        <h2 className="font-title text-3xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          tempora nam labore laborum fugit{' '}
          <span className="text-blue-600">
            quaerat eligendi esse perferendis libero voluptate!
          </span>
        </h2>
      </div>
    </section>
  );
}

export default Signup;
