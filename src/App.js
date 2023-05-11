import { Routes,Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Intro from './routes/Intro'
import Cpm from './routes/Cpm'
import Pert from './routes/Pert'
import Risk from './routes/Risk'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/intro" element={<Intro />}/>
        <Route path="/Cpm" element={<Cpm />}/>
        <Route path="/Pert" element={<Pert />}/>
        <Route path="/Risk" element={<Risk />}/>
      </Routes>
  );
}

export default App;
