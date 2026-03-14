import { useState } from "react";
import axios from "axios";

function PostJob() {

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");

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
          salary
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Job posted successfully");

      setTitle("");
      setCompany("");
      setLocation("");
      setDescription("");
      setSalary("");

    } catch (error) {
      console.log(error);
      alert("Error posting job");
    }
  };

  return (
    <div>

      <h2>Post Job</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Job Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Post Job
        </button>

      </form>

    </div>
  );
}

export default PostJob;