import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

//COMPONTENTI DA RENDERIZZARE PER LE PATH
import Index from './components';
import WhereWeAre from './components/WhereWeAre/WhereWeAre';
import ExRoutes from './components/Routes/ExRoutes';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/who-we-are" element={<Index />} />
        <Route path="/where-we-are" element={<WhereWeAre />} />
        <Route path="/routes" element={<ExRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
