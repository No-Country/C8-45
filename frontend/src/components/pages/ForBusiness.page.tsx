import { Link } from 'react-router-dom';
import Maintanance from '../organisms/Maintenance';

function ForBusiness() {
  return (
    <section className="min-h-[86vh] flex items-center">
      <div className="w-10/12 mx-auto">
        <div className="w-6/12">
          <h2 className="text-3xl font-title">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            neque ab consequatur corrupti error nesciunt quis quo temporibus
            similique asperiores.
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
