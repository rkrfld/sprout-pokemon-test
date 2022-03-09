import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Detail from "./pages/Detail";
import About from "./components/About";
import BaseStat from "./components/BaseStats";
function App() {
  return (
    <div className="App">
      <div className='flex justify-center'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />}>
              <Route path="about" element={<About />} />
              <Route path="stat" element={<BaseStat />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
