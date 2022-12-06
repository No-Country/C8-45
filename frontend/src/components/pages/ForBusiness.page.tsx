import { Link } from 'react-router-dom';
import Maintanance from '../organisms/Maintenance';

function ForBusiness() {
  return (
    <section className="min-h-[86vh] flex items-center">
      <div className="w-10/12 mx-auto">
        <div className="w-6/12">
          <h2 className="text-3xl font-title">
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
        <div></div>
      </div>
    </section>
  );
}

export default ForBusiness;
