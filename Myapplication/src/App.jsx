import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState("")

  function funLogout() {
    setUsername("")
    setPassword("")
    setStatus("")
  }

  function funLogin(e) {
    e.preventDefault()

    if (username === "admin" && password === "admin123")
      setStatus("success")
    else
      setStatus("fail")
  }

  return (
    <div>
      <nav className="navbar">
        <h2 className="logo">My Website</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact Us</a>
        </div>
      </nav>

      {status === "success" ? (
        <div>
          <h1>SUCCESS PAGE</h1>
          <p>WELCOME {username}!</p>
          <button onClick={funLogout}>Logout</button>
        </div>
      ) : status === "fail" ? (
        <div>
          <h1>Failure PAGE</h1>
          <p>WRONG CREDENTIALS</p>
          <button onClick={funLogout}>Back to Login</button>
        </div>
      ) : (
        <div id="home">
          <h1>LOGIN PAGE</h1>
          <br />

          <form onSubmit={funLogin}>
            <label>Enter UserName</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              required
            />

            <br /><br />

            <label>Enter Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />

            <br /><br />

            <button type="submit">SUBMIT</button>
          </form>
        </div>
      )}

      <section id="about">
        <h2>About Us</h2>
        <p>Welcome to our website. We provide useful services for users.</p>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <p>We offer simple and user-friendly web applications.</p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@example.com</p>
      </section>
    </div>
  )
}

export default App