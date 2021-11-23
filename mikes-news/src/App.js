import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import Nav from './Components/Nav';
import Articles from './Components/Articles';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Header />
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
