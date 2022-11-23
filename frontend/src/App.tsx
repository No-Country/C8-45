import { Route, Routes } from 'react-router-dom';
import Business from './components/pages/Business.page';
import CreateReview from './components/pages/CreateReview.page';
import Howitworks from './components/pages/How-it-works.page';
import Landing from './components/pages/Landing.page';
import Login from './components/pages/Login.page';
import Settings from './components/pages/Settings.page';
import Signup from './components/pages/Signup.page';
import Layout from './components/templates/Layout';

function App() {
  const base_url=import.meta.env.VITE_SERVER_ENDPOINT as string;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="createReview" element={<CreateReview />} />
          <Route path="how-it-works" element={<Howitworks />} />
          <Route path="business" element={<Business />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
