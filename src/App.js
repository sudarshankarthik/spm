import { Routes,Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Intro from './routes/Intro'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./routes/Blog";
import Theory from "./routes/Theory";

function App() {
  return (
    <>
      <Header />
      <div style={{height: '50px'}}></div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/intro" element={<Intro />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/theory" element={<Theory />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />
      </>
  );
}

export default App;
