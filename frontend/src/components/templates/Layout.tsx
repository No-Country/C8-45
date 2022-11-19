import { Outlet } from 'react-router-dom';
import Footer from '../organisms/Footer';
import Navbar from '../organisms/Navbar';

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
