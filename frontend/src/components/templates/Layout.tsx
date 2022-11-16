import { Outlet } from 'react-router-dom';
import Footer from '../organisms/Footer';
import Navbar from '../organisms/Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
