import React, { useEffect, useState } from "react";
import axios from "axios";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log("Error fetching jobs:", err);
      });
  }, []);

  const applyJob = async (jobId) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `http://localhost:5000/api/applications/apply/${jobId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(res.data.message || "Job applied successfully");
      setMessageType("success");
    } catch (error) {
      console.log("Apply error:", error);
      setMessage("Error applying for job");
      setMessageType("error");
    }
  };

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
          Available Jobs
        </h2>

        <p style={{ textAlign: "center", marginBottom: "20px", color: "#555" }}>
          Find and apply for jobs easily
        </p>

        {message && (
          <div
            className={`message-box ${
              messageType === "success" ? "message-success" : "message-error"
            }`}
            style={{ maxWidth: "700px", margin: "0 auto 20px auto" }}
          >
            {message}
          </div>
        )}

        {jobs.length === 0 ? (
          <p style={{ textAlign: "center" }}>No jobs available</p>
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
                onClick={() => applyJob(job._id)}
                style={{
                  background: "green",
                  color: "white",
                  border: "none",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                Apply Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Jobs;