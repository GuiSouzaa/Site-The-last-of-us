import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Inicio from './paginas/Inicio';
import Favoritos from './paginas/Inicio/Favoritos';
import Personagens from './paginas/Inicio/Personagens';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< Inicio />} />
        <Route path='/Favoritos' element={<Favoritos />} />
        <Route path='/Personagens' element={<Personagens />} />
      </Routes>
    </Router>
  );
}

export default App;
