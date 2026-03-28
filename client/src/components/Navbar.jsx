import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <div
      className="navbar"
      style={{
        background: "linear-gradient(90deg, #1e3a8a, #2563eb)",
        padding: "15px 0",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.1)"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h1 style={{ margin: 0, color: "white" }}>Job Portal</h1>

        <div>
          <Link
            to="/"
            style={{ color: "white", marginRight: "15px", textDecoration: "none" }}
          >
            Home
          </Link>

          {!token && (
            <>
              <Link
                to="/login"
                style={{ color: "white", marginRight: "15px", textDecoration: "none" }}
              >
                Login
              </Link>

              <Link
                to="/register"
                style={{ color: "white", marginRight: "15px", textDecoration: "none" }}
              >
                Register
              </Link>
            </>
          )}

          {token && role === "jobseeker" && (
            <>
              <Link
                to="/jobs"
                style={{ color: "white", marginRight: "15px", textDecoration: "none" }}
              >
                Jobs
              </Link>

              <Link
                to="/myapplications"
                style={{ color: "white", marginRight: "15px", textDecoration: "none" }}
              >
                My Applications
              </Link>

              <Link
                to="/resume"
                style={{ color: "white", marginRight: "15px", textDecoration: "none" }}
              >
                Resume Builder
              </Link>

              <button
                onClick={logoutUser}
                style={{
                  background: "#dc2626",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                Logout
              </button>
            </>
          )}

          {token && role === "employer" && (
            <>
              <Link
                to="/postjob"
                style={{ color: "white", marginRight: "15px", textDecoration: "none" }}
              >
                Post Job
              </Link>

              <Link
                to="/myjobs"
                style={{ color: "white", marginRight: "15px", textDecoration: "none" }}
              >
                My Jobs
              </Link>

              <button
                onClick={logoutUser}
                style={{
                  background: "#dc2626",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;