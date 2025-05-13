import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './src/pages/Home';
import Graphisme from './src/pages/Graphisme';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graphisme" element={<Graphisme />} />
      </Routes>
    </Router>
  );
};

export default App;