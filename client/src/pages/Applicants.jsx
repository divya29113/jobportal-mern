import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Applicants() {
  const { jobId } = useParams();
  const [applicants, setApplicants] = useState([]);

  const updateStatus = async (applicationId, status) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/applications/status/${applicationId}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Application status updated");

      const res = await axios.get(
        `http://localhost:5000/api/applications/job/${jobId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setApplicants(res.data);
    } catch (error) {
      console.log(error);
      alert("Error updating status");
    }
  };

  useEffect(() => {
    const fetchApplicantsData = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          `http://localhost:5000/api/applications/job/${jobId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setApplicants(res.data);
      } catch (error) {
        console.log(error);
        alert("Error fetching applicants");
      }
    };

    fetchApplicantsData();
  }, [jobId]);

  return (
    <div>
      <h2>View Applicants</h2>

      {applicants.length === 0 ? (
        <p>No applicants found</p>
      ) : (
        applicants.map((app) => (
          <div className="job-card" key={app._id}>
            <h3>{app.applicant.name}</h3>
            <p><b>Email:</b> {app.applicant.email}</p>
            <p><b>Status:</b> {app.status}</p>

            <button
              onClick={() => updateStatus(app._id, "accepted")}
              style={{
                background: "green",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer",
                marginRight: "10px"
              }}
            >
              Accept
            </button>

            <button
              onClick={() => updateStatus(app._id, "rejected")}
              style={{
                background: "#dc2626",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Reject
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Applicants;