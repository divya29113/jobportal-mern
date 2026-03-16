import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import PostJob from "./pages/PostJob";
import MyJobs from "./pages/MyJobs";
import Applicants from "./pages/Applicants";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container">
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/jobs" element={<Jobs />} />
         <Route path="/postjob" element={<PostJob />} />
         <Route path="/myjobs" element={<MyJobs />} />
         <Route path="/applicants" element={<Applicants />} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;