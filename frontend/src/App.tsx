import { Route, Routes } from 'react-router-dom';
import Business from './components/pages/Business';
import CreateReview from './components/pages/CreateReview';
import Howitworks from './components/pages/Howitworks';
import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Layout from './components/templates/Layout';

function App() {
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
