import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../src/Pages/Home/Home'
import Hotel from '../src/Pages/Hotel/Hotel'
import List from '../src/Pages/List/List'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Home />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
