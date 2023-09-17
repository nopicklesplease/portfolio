import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div>
      <ParallaxProvider>
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      </ParallaxProvider>
    </div>
  );
}

export default App;
