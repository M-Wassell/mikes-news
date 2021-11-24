import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import Nav from './Components/Nav';
import Articles from './Components/Articles';
import './App.css';

function App() {
  return (
    
      <BrowserRouter>
      <div className="App">
      <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/topics/:topic_name" element={<Articles />} />
        </Routes>
        </div>
      </BrowserRouter>
    
    
  );
}

export default App;
