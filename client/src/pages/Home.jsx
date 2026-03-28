function Home() {
  return (
    <div className="page-section">
      <div
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
          color: "white",
          borderRadius: "12px",
          marginTop: "20px",
          marginBottom: "30px"
        }}
      >
        <h1 style={{ fontSize: "45px", marginBottom: "15px" }}>
          Welcome to Job Portal
        </h1>

        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          Find your dream job or hire the best talent
        </p>

        <p style={{ fontSize: "16px" }}>
          Post jobs, apply for jobs, track applications, and build resumes easily.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "30px"
        }}
      >
        <div className="job-card">
          <h3>Job Search</h3>
          <p>Browse available jobs and apply easily.</p>
        </div>

        <div className="job-card">
          <h3>Application Tracking</h3>
          <p>Track whether your application is applied, accepted, or rejected.</p>
        </div>

        <div className="job-card">
          <h3>Resume Builder</h3>
          <p>Create your resume and download it as a PDF.</p>
        </div>
      </div>

      <div
        className="job-card"
        style={{
          textAlign: "center",
          padding: "30px"
        }}
      >
        <h2 style={{ color: "#1e3a8a", marginBottom: "10px" }}>
          Start Your Career Journey Today
        </h2>
        <p>
          Register, explore jobs, and build your future with our Job Portal.
        </p>
      </div>
    </div>
  );
}

export default Home;