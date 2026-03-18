import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import PostJob from "./pages/PostJob";
import MyJobs from "./pages/MyJobs";
import Applicants from "./pages/Applicants";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyApplications from "./pages/MyApplications";
import ResumeBuilder from "./pages/ResumeBuilder";

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
         <Route path="/applicants/:jobId" element={<Applicants />} />
         <Route path="/myapplications" element={<MyApplications />} />
         <Route path="/resume" element={<ResumeBuilder />} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;