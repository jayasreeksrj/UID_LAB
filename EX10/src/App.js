import React, { useState } from "react";
import axios from "axios";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    try {
      await axios.post("http://localhost:5000/signup", { username, password });
      alert("User signed up");
      setErrorMessage("");
    } catch (err) {
      console.error(err);
      setErrorMessage("Error signing up, please try again.");
    }
  };

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", { username, password });
      setToken(res.data.token);
      setErrorMessage("");
      navigate("/home"); // Redirect to Home page after login
    } catch (err) {
      setErrorMessage(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "24rem" }} className="p-4 shadow-sm">
        <Card.Body>
          <h2 className="text-center mb-4">EX10 Authentication</h2>
          <Form>
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" onClick={signup}>
                Sign Up
              </Button>
              <Button variant="success" onClick={login}>
                Log In
              </Button>
            </div>
          </Form>
          {errorMessage && (
            <Alert variant="danger" className="mt-3 text-center">
              {errorMessage}
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

function Home() {
  const navigate = useNavigate();

  const logout = () => {
    alert("User logged out");
    navigate("/"); // Redirect to login page on logout
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "24rem" }} className="p-4 shadow-sm">
        <Card.Body>
          <h2 className="text-center mb-4">Welcome to Home Page</h2>
          <div className="d-grid gap-2">
            <Button variant="secondary" onClick={logout}>
              Log Out
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
