import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Low from './components/Low';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/v-images" element={<Low quality="low" />} />
        <Route path="/high" element={<Home quality="high" />} />
      </Routes>
    </>
  );
}

export default App;
