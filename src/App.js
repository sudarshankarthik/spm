import { Routes,Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Intro from './routes/Intro'
import Cpm from './routes/Cpm'
import Pert from './routes/Pert'
import Risk from './routes/Risk'
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/blog" element={<Intro />}/>
        <Route path="/theory" element={<Cpm />}/>
        <Route path="/caculator" element={<Pert />}/>
      </Routes>
      </>
  );
}

export default App;
