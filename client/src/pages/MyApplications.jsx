import { useEffect, useState } from "react";
import axios from "axios";
import { FaClipboardList, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchMyApplications = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/applications/my",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setApplications(res.data);
      } catch (error) {
        console.log(error);
        alert("Error fetching applications");
      }
    };

    fetchMyApplications();
  }, []);

  const acceptedCount = applications.filter(
    (app) => app.status === "accepted"
  ).length;

  const rejectedCount = applications.filter(
    (app) => app.status === "rejected"
  ).length;

  return (
    <div className="page-section">
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#1e3a8a"
          }}
        >
          Jobseeker Dashboard
        </h2>

        <p style={{ textAlign: "center", marginBottom: "25px", color: "#555" }}>
          Track your applied jobs and application status
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
            <FaClipboardList
              size={30}
              color="#2563eb"
              style={{ marginBottom: "10px" }}
            />
            <h3 style={{ color: "#1e3a8a", marginBottom: "5px" }}>
              Applied Jobs
            </h3>
            <p style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>
              {applications.length}
            </p>
          </div>

          <div className="job-card" style={{ textAlign: "center", margin: 0 }}>
            <FaCheckCircle
              size={30}
              color="green"
              style={{ marginBottom: "10px" }}
            />
            <h3 style={{ color: "#1e3a8a", marginBottom: "5px" }}>
              Accepted
            </h3>
            <p
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                margin: 0,
                color: "green"
              }}
            >
              {acceptedCount}
            </p>
          </div>

          <div className="job-card" style={{ textAlign: "center", margin: 0 }}>
            <FaTimesCircle
              size={30}
              color="red"
              style={{ marginBottom: "10px" }}
            />
            <h3 style={{ color: "#1e3a8a", marginBottom: "5px" }}>
              Rejected
            </h3>
            <p
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                margin: 0,
                color: "red"
              }}
            >
              {rejectedCount}
            </p>
          </div>
        </div>

        {/* Applications List */}
        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#1e3a8a"
          }}
        >
          My Applications
        </h2>

        <p style={{ textAlign: "center", marginBottom: "20px", color: "#555" }}>
          Total Applications: {applications.length}
        </p>

        {applications.length === 0 ? (
          <p style={{ textAlign: "center" }}>No applications found</p>
        ) : (
          applications.map((app) => (
            <div className="job-card" key={app._id}>
              <h3 style={{ color: "#1e3a8a", marginBottom: "10px" }}>
                {app.job?.title}
              </h3>

              <p style={{ margin: "6px 0" }}>
                <b>Company:</b> {app.job?.company}
              </p>

              <p style={{ margin: "6px 0" }}>
                <b>Location:</b> {app.job?.location}
              </p>

              <p style={{ margin: "6px 0" }}>
                <b>Salary:</b> {app.job?.salary}
              </p>

              <p
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  color:
                    app.status === "accepted"
                      ? "green"
                      : app.status === "rejected"
                      ? "red"
                      : "#1e3a8a"
                }}
              >
                Status: {app.status}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyApplications;