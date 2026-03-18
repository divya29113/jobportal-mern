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
              Authorization: `Bearer ${token}`
            }
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
      <h2>My Applications</h2>

      {applications.length === 0 ? (
        <p>No applications found</p>
      ) : (
        applications.map((app) => (
          <div className="job-card" key={app._id}>
            <h3>{app.job?.title}</h3>
            <p><b>Company:</b> {app.job?.company}</p>
            <p><b>Location:</b> {app.job?.location}</p>
            <p><b>Salary:</b> {app.job?.salary}</p>
            <p><b>Status:</b> {app.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyApplications;