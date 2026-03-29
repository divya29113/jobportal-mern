import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBriefcase, FaUserTie } from "react-icons/fa";

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
    <div className="page-section">
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#1e3a8a"
          }}
        >
          Employer Dashboard
        </h2>

        <p style={{ textAlign: "center", marginBottom: "25px", color: "#555" }}>
          Manage your posted jobs and view applicants
        </p>

        {/* Dashboard Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "30px"
          }}
        >
          <div className="job-card" style={{ textAlign: "center", margin: 0 }}>
            <FaBriefcase
              size={30}
              color="#2563eb"
              style={{ marginBottom: "10px" }}
            />
            <h3 style={{ color: "#1e3a8a", marginBottom: "5px" }}>
              Total Jobs
            </h3>
            <p style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>
              {jobs.length}
            </p>
          </div>

          <div className="job-card" style={{ textAlign: "center", margin: 0 }}>
            <FaUserTie
              size={30}
              color="#2563eb"
              style={{ marginBottom: "10px" }}
            />
            <h3 style={{ color: "#1e3a8a", marginBottom: "5px" }}>
              Employer Panel
            </h3>
            <p style={{ fontSize: "16px", margin: 0 }}>
              Manage Jobs
            </p>
          </div>
        </div>

        {/* Jobs List */}
        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#1e3a8a"
          }}
        >
          My Posted Jobs
        </h2>

        <p style={{ textAlign: "center", marginBottom: "20px", color: "#555" }}>
          Total Jobs Posted: {jobs.length}
        </p>

        {jobs.length === 0 ? (
          <p style={{ textAlign: "center" }}>No jobs posted yet</p>
        ) : (
          jobs.map((job) => (
            <div
              className="job-card"
              key={job._id}
              style={{ maxWidth: "700px", margin: "20px auto" }}
            >
              <h3 style={{ color: "#1e3a8a", marginBottom: "10px" }}>
                {job.title}
              </h3>

              <p style={{ margin: "6px 0" }}>
                <b>Company:</b> {job.company}
              </p>

              <p style={{ margin: "6px 0" }}>
                <b>Location:</b> {job.location}
              </p>

              <p style={{ margin: "6px 0" }}>
                <b>Salary:</b> ₹ {job.salary}
              </p>

              <p style={{ margin: "10px 0", color: "#555" }}>
                <b>Description:</b> {job.description}
              </p>

              <button
                onClick={() => navigate(`/applicants/${job._id}`)}
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                View Applicants
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyJobs;