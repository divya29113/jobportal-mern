import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("jobseeker");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/users/register", {
        name,
        email,
        password,
        role
      });

      setMessage(res.data.message || "Registration successful");
      setMessageType("success");

      setName("");
      setEmail("");
      setPassword("");
      setRole("jobseeker");
    } catch (error) {
      console.log(error);
      setMessage("Error registering user");
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
          Register
        </h2>

        <p
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#555"
          }}
        >
          Create your account to continue
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
          <form onSubmit={registerUser}>
            <input
              type="text"
              placeholder="Name"
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
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="jobseeker">Jobseeker</option>
              <option value="employer">Employer</option>
            </select>

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;