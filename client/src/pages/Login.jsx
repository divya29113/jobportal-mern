import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      setMessage("Login successful");
      setMessageType("success");

      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
      setMessage("Invalid email or password");
      setMessageType("error");
    }
  };

  return (
    <div className="page-section">
      <div style={{ maxWidth: "500px", margin: "auto" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "8px",
            color: "#1e3a8a"
          }}
        >
          Login
        </h2>

        <p
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#555"
          }}
        >
          Enter your credentials to continue
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
          <form onSubmit={loginUser}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;