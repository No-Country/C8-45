import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useGetCompanyQuery } from '../../redux/api/companyApi';
import { getCompany } from '../../redux/features/companySlice';
import UserSidebar from '../molecules/UserSidebar';
import BusinessStats from '../organisms/BusinessStats';

const BusinessProfile = () => {
  const { data, error, isLoading } = useGetCompanyQuery(null);
  const dispatch = useDispatch();
  dispatch(getCompany(null));
  return (
    <section className="lg:w-9/12 mx-auto">
      <BusinessStats name={data?.name} reviewsQuantity={data?.reviewsQuantity} ratingGeneral={data?.ratingGeneral} website={data?.website} />
      <div className="flex flex-col md:flex-row mx-auto my-10 divide-x-2 ">
        <aside className="hidden md:block md:w-3/12 lg:w-3/12 ">
          <UserSidebar />
        </aside>
        <main className="md:w-9/12 md:p-4">
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default BusinessProfile;
