import Jobs from "./pages/Jobs";
import Applicants from "./pages/Applicants";
import PostJob from "./pages/PostJob";
import MyJobs from "./pages/MyJobs";
import "./styles.css";

function App() {
  return (
    <div>
      <nav style={{background:"#333",color:"white",padding:"10px"}}>
        <h2>Job Portal</h2>
      </nav>


      <PostJob />

      <hr />

      <Jobs />

      <hr />

      <Applicants />

      <hr />
      <MyJobs />

    </div>
  );
}

export default App;