import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import './App.css';
import SelectLevel from './Pages/SelectLevel/SelectLevel';
import Play from './Pages/Play/Play';
import End from './Pages/End/End';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/select_level" element={<SelectLevel />}></Route>
        <Route path="/play/:dificulty" element={<Play />}></Route>
        <Route path="/end/:score" element={<End />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
