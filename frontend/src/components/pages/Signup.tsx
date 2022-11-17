import SignUpForm from '../organisms/SignUpForm';

function Signup() {
  return (
    <main className="min-h-screen  items-center">
      <section className=" w-full md:my-20 md:py-20 border flex items-center my-auto">
        <div className="w-6/12">
          <div className="w-6/12 mx-auto">
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
