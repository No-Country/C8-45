import SignUpBusinessForm from '../organisms/SignUpBusinessForm';

export default function CreateReview() {
  return (
    <main className="min-h-screen ">
      <div className="lg:flex my-24">
        <div className="my-3 w-11/12 sm:w-8/12 md:w-5/12 lg:w-4/12 mx-auto">
          <h1 className="font-roboto lg:text-5xl text3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel nulla augue.
          </h1><br/>
          <p className="font-roboto lg:text-2xl text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel nulla augue.
          </p>
        </div>
        <div className="my-3 w-11/12 sm:w-8/12 md:w-5/12 lg:w-1/4 mx-auto lg:ml-0">
          <SignUpBusinessForm />
        </div>
      </div>
    </main>
  );
}
