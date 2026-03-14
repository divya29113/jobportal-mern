import React, { useState } from "react";
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
            Authorization: `Bearer ${token}`
          }
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
          Authorization: `Bearer ${token}`
        }
      }
    );

    alert(res.data.message);

  } catch (error) {
    console.log(error);
  }

};

  return (
    <div>

      <h2>View Job Applicants</h2>

      <input
        type="text"
        placeholder="Enter Job ID"
        onChange={(e) => setJobId(e.target.value)}
      />

      <button onClick={fetchApplicants}>
        Get Applicants
      </button>

      <hr />

      {applicants.map((app) => (
  <div key={app._id} style={{border:"1px solid gray", padding:"10px", margin:"10px"}}>

    <h3>{app.applicant.name}</h3>
    <p>Email: {app.applicant.email}</p>
    <p>Status: {app.status}</p>

    <button onClick={() => updateStatus(app._id, "accepted")}>
      Accept
    </button>

    <button onClick={() => updateStatus(app._id, "rejected")}>
      Reject
    </button>

  </div>
))}

    </div>
  );
}

export default Applicants;