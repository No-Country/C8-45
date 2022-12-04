import { Outlet } from 'react-router-dom';
import UserSidebar from '../molecules/UserSidebar';
import BusinessStats from '../organisms/BusinessStats';

const BusinessProfile = () => {
  return (
    <section className="lg:w-9/12 mx-auto">
      <BusinessStats />
      <div className="flex flex-col md:flex-row mx-auto my-10 divide-x-2 ">
        <aside className="hidden md:block md:w-3/12 lg:w-3/12 "></aside>
        <main className="md:w-9/12 md:p-4">
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default BusinessProfile;
