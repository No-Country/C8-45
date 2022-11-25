import { Route, Routes } from 'react-router-dom';
import Business from './components/pages/Business.page';
import CreateReview from './components/pages/CreateReview.page';
import Howitworks from './components/pages/How-it-works.page';
import Landing from './components/pages/Landing.page';
import Login from './components/pages/Login.page';
import Settings from './components/pages/Settings.page';
import Signup from './components/pages/Signup.page';
import Layout from './components/templates/Layout';
import SignupBusiness from './components/pages/SignupBusiness.page';
import MyProfile from './components/pages/User.page';
import UserSettings from './components/pages/Settings.user.page'
import MyReviews from './components/pages/Reviews.user.page'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signup-business" element={<SignupBusiness />} />
          <Route path="createReview" element={<CreateReview />} />
          <Route path="how-it-works" element={<Howitworks />} />
          <Route path="business" element={<Business />} />
          <Route path="settings" element={<Settings />} />
          <Route path='/me' element={<MyProfile/>}>
            <Route index path='reviews' element={<MyReviews/>}/>
            <Route path='settings' element={<UserSettings/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
