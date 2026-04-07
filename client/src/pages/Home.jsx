import React from "react";

function Home() {
  return (
    <div className="page-section">
      <style>{`
        .hero-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 60px 40px;
          background: linear-gradient(135deg, #2563eb, #1e3a8a);
          color: white;
          border-radius: 18px;
          margin-top: 20px;
          margin-bottom: 35px;
          flex-wrap: wrap;
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.25);
        }

        .hero-left {
          flex: 1;
          max-width: 560px;
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 14px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 999px;
          font-size: 14px;
          margin-bottom: 18px;
        }

        .hero-title {
          font-size: 42px;
          margin-bottom: 15px;
        }

        .hero-text {
          font-size: 18px;
          color: #e0e7ff;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .hero-tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .tag {
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 14px;
        }

        .hero-right {
          flex: 1;
          text-align: center;
        }

        .hero-image {
          width: 320px;
          border-radius: 12px;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .feature-card {
          background: white;
          border-radius: 18px;
          padding: 28px 24px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
          transition: 0.3s;
          border: 1px solid #e5e7eb;
        }

        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 28px rgba(0,0,0,0.12);
        }

        .feature-icon {
          width: 58px;
          height: 58px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-bottom: 18px;
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
          box-shadow: 0 4px 10px rgba(37, 99, 235, 0.15);
        }

        .feature-card h3 {
          color: #1e3a8a;
          margin-bottom: 10px;
          font-size: 28px;
        }

        .feature-card p {
          color: #555;
          margin: 0;
          font-size: 18px;
          line-height: 1.6;
        }

        .bottom-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 40px 30px;
          text-align: center;
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
          border: 1px solid #e5e7eb;
        }

        .bottom-icon {
          width: 70px;
          height: 70px;
          margin: 0 auto 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
        }

        .bottom-card h2 {
          color: #1e3a8a;
          font-size: 28px;
          margin-bottom: 10px;
        }

        .bottom-card p {
          color: #555;
          font-size: 17px;
          margin: 0;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .hero-banner {
            flex-direction: column;
            text-align: center;
          }

          .hero-image {
            margin-top: 20px;
            width: 260px;
          }

          .hero-title {
            font-size: 34px;
          }
        }
      `}</style>

      {/* PREMIUM BANNER */}
      <div className="hero-banner">
        <div className="hero-left">
          <div className="hero-badge">Smart Job Portal</div>

          <h1 className="hero-title">Build Your Career with Confidence</h1>

          <p className="hero-text">
            Search jobs, create resumes, apply easily, and track your
            application status all in one place.
          </p>

          <div className="hero-tags">
            <div className="tag">Job Search</div>
            <div className="tag">Resume Builder</div>
            <div className="tag">Application Tracking</div>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="/jobbanner.jpg"
            alt="Job Portal"
            className="hero-image"
          />
        </div>
      </div>

      {/* FEATURES */}
      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3>Job Search</h3>
          <p>Find and apply for jobs easily based on your skills.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📄</div>
          <h3>Resume Builder</h3>
          <p>Create professional resumes quickly and efficiently.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📌</div>
          <h3>Application Tracking</h3>
          <p>Track your job application status in real-time.</p>
        </div>
      </div>

      {/* FINAL SECTION */}
      <div className="bottom-card">
        <div className="bottom-icon">🚀</div>
        <h2>Start Your Career Journey Today</h2>
        <p>
          Register now and explore amazing job opportunities.
        </p>
      </div>
    </div>
  );
}

export default Home;