
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';

import Analysis from './components/pages/Analysis'
import Strategy from './components/pages/Strategy';

function App() {
  

  return (
    <>
<Navbar/>
      <Routes>
          <Route path="/analisis" element={<Analysis />} />
          <Route path="/strategy" element={<Strategy />} />
        </Routes>
    
    </>
  );
}

export default App
