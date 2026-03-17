import { useState } from "react";

function ResumeBuilder() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");

  return (
    <div className="page-section">
      <h2>Resume Builder</h2>

      <div className="form-card">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <textarea
          placeholder="Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          rows="4"
        />

        <textarea
          placeholder="Education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          rows="4"
        />

        <textarea
          placeholder="Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          rows="4"
        />
      </div>

      <div className="job-card">
        <h2>Resume Preview</h2>
        <p><b>Name:</b> {name}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Phone:</b> {phone}</p>
        <p><b>Skills:</b> {skills}</p>
        <p><b>Education:</b> {education}</p>
        <p><b>Experience:</b> {experience}</p>
      </div>
    </div>
  );
}

export default ResumeBuilder;