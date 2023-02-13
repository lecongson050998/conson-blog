
import Home from "./pages/home/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Document from "./pages/document/Document";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Project from "./pages/project/Project";
import Single from "./pages/single/Single";
import Upload from "./pages/upload/Upload";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/document" element={<Document/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/document/:id" element={<Single/>} />
          <Route path="/document/upload" element={<Upload/>} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
