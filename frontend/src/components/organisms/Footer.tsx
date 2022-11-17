import { Link } from 'react-router-dom';
import { FiInstagram, FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi';
import Logo from '../atoms/Logo';

function Footer() {
  // Todo Finish Footer
  return (
    <footer className="bg-black text-white p-5 md:p-10">
      <div className="mx-auto w-full my-4 flex justify-center">
        <Logo type="dark" />
      </div>
      <div className="flex flex-col md:flex-row justify-around my-4 ">
        <div className="flex md:flex-row w-full justify-between md:w-6/12 md:justify-around">
          <div className="flex flex-col  text-white">
            <span className="text-xl font-bold">Comunidad</span>
            <ul>
              <li>
                <Link to="/" className="text-white text-lg">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-lg">
                  Log In
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-lg">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col  text-white">
            <span className="text-xl font-bold">About Us</span>
            <ul>
              <li>
                <Link to="/" className="text-white text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-lg">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-lg">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex md:flex-row w-full justify-between my-3 md:my-0 md:w-6/12 md:justify-around">
          <div className="flex flex-col  text-white">
            <span className="text-xl font-bold">Business</span>
            <ul>
              <li>
                <Link to="/" className="text-white text-lg">
                  For business
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-lg">
                  Log in
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-lg">
                  Blog for business
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col  text-white">
            <span className="text-xl font-bold">Follow us:</span>
            <ul className="flex my-3">
              <li className="mx-2">
                <a href="/" className="text-white text-3xl">
                  <FiInstagram />
                </a>
              </li>
              <li className="mx-2">
                <a href="/" className="text-white text-3xl">
                  <FiLinkedin />
                </a>
              </li>
              <li className="mx-2">
                <a href="/" className="text-white text-3xl">
                  <FiFacebook />
                </a>
              </li>
              <li className="mx-2">
                <a href="/" className="text-white text-3xl">
                  <FiTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
