import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MyJobs() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyJobs = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:5000/api/jobs/myjobs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setJobs(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMyJobs();
  }, []);

  return (
    <div>
      <h2>My Posted Jobs</h2>

      {jobs.length === 0 ? (
        <p>No jobs posted yet</p>
      ) : (
        jobs.map((job) => (
          <div className="job-card" key={job._id}>
            <h3>{job.title}</h3>
            <p><b>Company:</b> {job.company}</p>
            <p><b>Location:</b> {job.location}</p>
            <p><b>Salary:</b> {job.salary}</p>
            <p><b>Description:</b> {job.description}</p>

            <button onClick={() => navigate(`/applicants/${job._id}`)}>
              View Applicants
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default MyJobs;