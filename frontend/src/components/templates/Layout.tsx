import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import userApi from '../../redux/api/userApi';
import { setCredentials } from '../../redux/features/userSlice';
import Footer from '../organisms/Footer';
import Navbar from '../organisms/Navbar';
import LoadingScreen from './LoadingScreen';

function Layout() {
  return (
    <>
      <Navbar />
      <main className="py-20 md:my-0 md:py-0 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
