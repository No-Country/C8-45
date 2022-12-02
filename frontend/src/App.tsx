import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from './redux/store';
import ForBusiness from './components/pages/ForBusiness.page';
import CreateReview from './components/pages/CreateReview.page';
import Howitworks from './components/pages/How-it-works.page';
import Landing from './components/pages/Landing.page';
import Login from './components/pages/Login.page';
import Signup from './components/pages/Signup.page';
import Layout from './components/templates/Layout';
import SignupBusiness from './components/pages/SignupBusiness.page';
import MyProfile from './components/pages/User.page';
import UserSettings from './components/pages/Settings.user.page';
import MyReviews from './components/pages/Reviews.user.page';
import LogInBusiness from './components/pages/LogInBusiness.page';
import BusinessProfile from './components/pages/BusinessProfile.page';
import ReviewFormPage from './components/pages/MakeReview.user.page';
import MyBusinessReviews from './components/pages/Reviews.business.page';
import BusinessSettings from './components/pages/Setting.business.page';

function App() {
  const { user } = useAppSelector((state) => state.auth);
  const isCompany = user?.role.id === 3

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login-business" element={<LogInBusiness />} />
          <Route path="signup-business" element={<SignupBusiness />} />
          <Route path="createReview" element={<CreateReview />} />
          <Route path="how-it-works" element={<Howitworks />} />
          <Route path="for-business" element={<ForBusiness />} />
          <Route path="business/:id" element={<BusinessProfile />} />
          <Route path="/me" element={isCompany ? <BusinessProfile /> : <MyProfile />}>
            <Route index element={isCompany ? '' : <ReviewFormPage />} />
            <Route path="reviews" element={isCompany ? <MyBusinessReviews /> : <MyReviews />} />
            <Route path="settings" element={isCompany ? <BusinessSettings /> : <UserSettings />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
