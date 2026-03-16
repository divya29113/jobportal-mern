import { useState } from "react";
import axios from "axios";

function Applicants() {
  const [jobId, setJobId] = useState("");
  const [applicants, setApplicants] = useState([]);

  const fetchApplicants = async () => {
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

  const updateStatus = async (applicationId, status) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        `http://localhost:5000/api/applications/status/${applicationId}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      // refresh applicants after status update
      fetchApplicants();
    } catch (error) {
      console.log(error);
      alert("Error updating status");
    }
  };

  return (
    <div>
      <h2>View Applicants</h2>

      <div className="job-card">
        <input
          type="text"
          placeholder="Enter Job ID"
          value={jobId}
          onChange={(e) => setJobId(e.target.value)}
        />

        <button onClick={fetchApplicants}>Get Applicants</button>
      </div>

      {applicants.length === 0 ? (
        <p>No applicants found</p>
      ) : (
        applicants.map((app) => (
          <div className="job-card" key={app._id}>
            <h3>{app.applicant.name}</h3>
            <p><b>Email:</b> {app.applicant.email}</p>
            <p><b>Status:</b> {app.status}</p>

            <button onClick={() => updateStatus(app._id, "accepted")}>
              Accept
            </button>

            <button
              onClick={() => updateStatus(app._id, "rejected")}
              style={{ marginLeft: "10px", background: "#dc2626" }}
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