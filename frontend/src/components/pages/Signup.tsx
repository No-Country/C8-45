import SignUpForm from '../organisms/SignUpForm';

function Signup() {
  return (
    <main className="min-h-screen  items-center">
      <section className=" w-full md:my-20 md:py-20 flex-col  flex md:flex-row items-center my-auto">
        <div className="w-full  border md:w-6/12">
          <div className="w-9/12 md:w-6/12 mx-auto">
            <SignUpForm />
          </div>
        </div>
        <div>
          <p>Image Section</p>
        </div>
      </section>
    </main>
  );
}

export default Signup;
