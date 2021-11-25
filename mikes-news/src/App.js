import { Route, Routes } from 'react-router';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Articles from './Components/Articles';
import './App.css';
import SingleArticle from './Components/SingleArticle';

function App() {
  return (
      <div className="App">
      <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/topics/:topic_name" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle/>} >

          </Route>
        </Routes>
        </div>
  );
}

export default App;
