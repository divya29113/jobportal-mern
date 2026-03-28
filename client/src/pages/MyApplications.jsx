import { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <div className="page-section">
      <div style={{ maxWidth: "900px", margin: "auto" }}>
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