import { Outlet } from 'react-router-dom';
import Footer from '../organisms/Footer';
import Navbar from '../organisms/Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <main className=" md:my-0 py-20 md:py-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
