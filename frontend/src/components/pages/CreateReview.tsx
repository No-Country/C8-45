import ReviewForm from '../organisms/ReviewForm';

export default function CreateReview() {
  return (
    <main className="min-h-screen ">
      <div className="lg:flex my-24">
        <div className='my-3 w-11/12 sm:w-8/12 md:w-5/12 lg:w-4/12 mx-auto'>
          <h1 className='font-roboto lg:text-5xl text3xl'>
            Lorem ipsum dolor sit amet, consectetur <span className='text-blue-600'>adipiscing elit.</span> 
          </h1>          
        </div>
        <div className='my-3 w-11/12 sm:w-8/12 md:w-5/12 lg:w-4/12 mx-auto lg:ml-0'>          
          <ReviewForm />          
        </div>
        
      </div>
    </main>
  );
}
