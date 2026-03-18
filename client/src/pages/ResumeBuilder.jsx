import { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ResumeBuilder() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");

  const resumeRef = useRef();

  const downloadPDF = async () => {
    const input = resumeRef.current;

    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

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

        <button onClick={downloadPDF}>Download Resume as PDF</button>
      </div>

      <div className="job-card" ref={resumeRef}>
      <h2 style={{ textAlign: "center" }}>{name}</h2>

      <p><b>Email:</b> {email}</p>
      <p><b>Phone:</b> {phone}</p>

     <h3>Skills</h3>
     <p>{skills}</p>

    <h3>Education</h3>
    <p>{education}</p>

    <h3>Experience</h3>
    <p>{experience}</p>
    </div>
    </div>
  );
}

export default ResumeBuilder;