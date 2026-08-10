import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Student from "./pages/Student/Student";
import Teacher from "./pages/Teacher/Teacher";
import Researcher from "./pages/Researcher/Researcher";
import Categories from "./pages/Categories/Categories";
import AITools from "./pages/AITools/AITools";
import About from "./pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/researcher" element={<Researcher />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/learning" element={<AITools />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;