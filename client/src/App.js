
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
          <Route exact path="/document" element={<Document/>} />
          <Route exact path="/project" element={<Project/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route path="/document/:id" element={<Single/>} />
          <Route exact path="/document/upload" element={<Upload/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
