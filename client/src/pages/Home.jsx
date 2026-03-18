function Home() {
  return (
    <div
      className="page-section"
      style={{
        textAlign: "center",
        background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
        color: "white",
        padding: "60px 20px",
        borderRadius: "12px",
        marginTop: "20px"
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "15px" }}>
        Welcome to Job Portal
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
        Find your dream job or hire the best talent
      </p>

      <p style={{ fontSize: "16px" }}>
        Post jobs, apply for jobs, track applications, and build resumes easily.
      </p>
    </div>
  );
}

export default Home;