import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Users from "./components/Users";
import Courses from "./components/Courses";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import AddCourse from "./components/AddCourse";

function App() {
  return (
    <div>
      
        <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/courses/add" element={<AddCourse />} />
      </Routes>
    </div>

  )

}

export default App;
