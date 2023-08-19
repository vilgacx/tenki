import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Search from "./routes/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} /> 
    </Routes>
  )
}

export default App
