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
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#1e3a8a"
          }}
        >
          Resume Builder
        </h2>

        <div className="resume-grid">
          <div className="form-card resume-form">
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

          <div className="job-card resume-preview" ref={resumeRef}>
            <h2
              style={{
                textAlign: "center",
                color: "#1e3a8a",
                marginBottom: "20px"
              }}
            >
              {name || "Your Name"}
            </h2>

            <p><b>Email:</b> {email || "yourmail@example.com"}</p>
            <p><b>Phone:</b> {phone || "XXXXXXXXXX"}</p>

            <hr />

            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ color: "#1e3a8a", marginBottom: "8px" }}>Skills</h3>
              <p>{skills || "Add your technical and personal skills here."}</p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ color: "#1e3a8a", marginBottom: "8px" }}>Education</h3>
              <p>{education || "Add your education details here."}</p>
            </div>

            <div>
              <h3 style={{ color: "#1e3a8a", marginBottom: "8px" }}>Experience</h3>
              <p>{experience || "Add your work experience or internship details here."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;