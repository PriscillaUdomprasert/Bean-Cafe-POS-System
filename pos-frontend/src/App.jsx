import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { Home, Auth, About, Contact, Orders} from './pages';
import Header from './components/shared/Header';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Header />
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
