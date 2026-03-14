import { useEffect, useState } from "react";
import axios from "axios";

function MyJobs() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {

    const fetchMyJobs = async () => {

      try {

        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/jobs/myjobs",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

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
          <div key={job._id} style={{border:"1px solid gray", padding:"10px", margin:"10px"}}>

            <h3>{job.title}</h3>
            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>

          </div>
        ))
      )}

    </div>
  );
}

export default MyJobs;