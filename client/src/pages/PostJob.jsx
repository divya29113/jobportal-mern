import { useState } from "react";
import axios from "axios";

function PostJob() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/jobs",
        {
          title,
          company,
          location,
          description,
          salary,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(res.data.message || "Job posted successfully");
      setMessageType("success");

      setTitle("");
      setCompany("");
      setLocation("");
      setDescription("");
      setSalary("");
    } catch (error) {
      console.log(error);
      setMessage("Error posting job");
      setMessageType("error");
    }
  };

  return (
    <div className="page-section">
      <div style={{ maxWidth: "700px", margin: "auto" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "8px",
            color: "#1e3a8a"
          }}
        >
          Post a Job
        </h2>

        <p
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#555"
          }}
        >
          Fill the details below to create a new job listing
        </p>

        {message && (
          <div
            className={`message-box ${
              messageType === "success" ? "message-success" : "message-error"
            }`}
          >
            {message}
          </div>
        )}

        <div className="form-card">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Job Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <textarea
              placeholder="Job Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                height: "80px",
                resize: "none"
              }}
            />

            <input
              type="text"
              placeholder="Salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />

            <button
              type="submit"
              style={{
                background: "linear-gradient(90deg, #2563eb, #1e3a8a)",
                color: "white",
                border: "none",
                padding: "12px 18px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                width: "100%",
                marginTop: "10px"
              }}
            >
              Post Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostJob;