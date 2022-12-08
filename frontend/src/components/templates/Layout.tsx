import algoliasearch from 'algoliasearch';
import { InstantSearch } from 'react-instantsearch-hooks-web';

import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import userApi from '../../redux/api/userApi';
import { setCredentials } from '../../redux/features/userSlice';
import Footer from '../organisms/Footer';
import Navbar from '../organisms/Navbar';
import LoadingScreen from './LoadingScreen';

function Layout() {
  const searchClient = algoliasearch(
    import.meta.env.VITE_ALGOLIA_APP_ID,
    import.meta.env.VITE_ALGOLIA_SEARCH_KEY
  );
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName={'companiesSearch'}>
        <Navbar />
        <main className="py-20 md:my-0 md:py-0 min-h-[84vh]">
          <Outlet />
        </main>
        <Footer />
      </InstantSearch>
    </>
  );
}

export default Layout;
