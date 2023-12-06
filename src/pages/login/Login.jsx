import React from "react";
import "./login.css";
import logo from "../../assets/logo.svg";

export default function Login({ handleStatusLogin }) {
  const informationUser = {};

  // log in
  function handleLogin(e) {
    const name = e.target.name;
    const value = e.target.value;
    informationUser[name] = value;
  }
  function handleSubmitLogin() {
    fetch(
      `http://localhost:3001/users?email=${informationUser.email}&password=${informationUser.password}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          handleStatusLogin({
            name: data[0].fullName,
            email: data[0].email,
            userId: data[0].id
          });
          // informationUser = {};
        } else {
          alert("username or password is wrong");
        }
      });
  }
  // end of log in

  // register
  function handleRegister(e) {
    const name = e.target.name;
    const value = e.target.value;
    informationUser[name] = value;
  }

  function handleSubmitRegister() {
    fetch("http://localhost:3001/users", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(informationUser)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  // end of register

  return (
    <div className="gpt3__login-container">
      <div className="gpt3__login_container-content">
        <img className="img-fluid" src={logo} alt="logo" />
        <h2 className="gradient__text">Welcome To The Future</h2>
      </div>

      <div className="gpt3__login_container-action">
        {/* login */}
        <h3>Sign In</h3>
        <input
          onChange={handleLogin}
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <input
          onChange={handleLogin}
          name="password"
          type="password"
          placeholder="Password"
        />
        <button onClick={handleSubmitLogin} type="submit">
          Log In
        </button>

        {/* register */}
        <p>Don't have an account?</p>
        <h3>Register</h3>
        <input
          name="fullName"
          onChange={handleRegister}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          onChange={handleRegister}
          type="email"
          placeholder="Email Address"
        />
        <input
          name="password"
          onChange={handleRegister}
          type="password"
          placeholder="Create Password"
        />
        <button onClick={handleSubmitRegister} type="submit">
          Register
        </button>
      </div>
    </div>
  );
}
