import { Link } from 'react-router-dom';
import Maintanance from '../organisms/Maintenance';

function ForBusiness() {
  return (
    <section className="w-full flex-col h-[84vh]  flex md:flex-row items-center justify-center my-auto">
      <div className="w-full md:w-6/12 px-3 ">
        <h2 className="text-lg lg:text-3xl  font-title">
          Are you looking for a way to get more customers and increase your
          online presence? Look no further! Our reviews app is the perfect
          solution for you.
        </h2>
        <div className="my-5">
          <Link
            to={'/signup-business'}
            className="bg-blue-600 p-3 text-xl rounded-full text-white px-6"
          >
            Register my business
          </Link>
        </div>
        <h4 className="text-xl font-title">
          Already have an account?
        </h4>
        <div className="my-5">
          <Link
            to={'/login-business'}
            className="bg-blue-600 p-3 text-xl rounded-full text-white px-6"
          >
            Log in
          </Link>
        </div>
      </div>
      <div className="hidden md:block md:w-1/4">
        <img
          className="rounded-r-3xl"
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
        />
      </div>
    </section>
  );
}

export default ForBusiness;
