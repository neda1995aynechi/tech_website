import React from "react";
import "./profile.css";

export default function Profile({ user }) {
  const informationUser = {};

  function handleModification(e) {
    const name = e.target.name;
    const value = e.target.value;
    informationUser[name] = value;
  }

  // function handleSubmitModification() {
  //   fetch(`http://localhost:3001/users/${user[0]}`, {
  //     method: "POST", // or 'PUT'
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(informationUser)
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }

  // to update user data

  // var params = {
  //   email: user.email
  // };

  function handleSubmitModifications() {
    fetch(`http://localhost:3001/users/${user.userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(informationUser)
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("user successfully updated");
        } else {
          console.log("Failed to update");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  console.log(user);
  return (
    <div className="gpt3__profile-container">
      <div className="gpt3__profile_container-content">
        <h2 className="gradient__text">Profile Details</h2>

        <p>Full Name: {user.name} </p>
        <p>E-mail: {user.email} </p>
        <h3>Change Password</h3>

        <label id="changePass">
          New Pass:
          <input type="password" placeholder="example123" id="changePass" />
        </label>
        <button type="submit">Change</button>

        <h3>
          Additional Infformation <span>(optional)</span>
        </h3>

        <label id="number">
          Number:
          <input
            onChange={handleModification}
            name="number"
            type="tel"
            placeholder="+1 1234 12345"
            id="number"
          />
        </label>

        <label id="address">
          Address:
          <input type="text" placeholder="example street" id="address" />
        </label>

        <label id="age">
          Age:
          <input type="number" placeholder="27" id="age" />
        </label>

        {/* country dropdown */}
        <label id="country">
          Select Your Country:
          <select className="form-select" id="country" name="country">
            <option value="">country</option>
            <option value="AF">Afghanistan</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AU">Australia</option>
            <option value="AZ">Azerbaijan</option>
            <option value="BG">Bulgaria</option>
            <option value="CA">Canada</option>
            <option value="CN">China</option>
            <option value="CR">Costa Rica</option>
            <option value="CZ">Czech Republic</option>
            <option value="DK">Denmark</option>
            <option value="DM">Dominica</option>
            <option value="DO">Dominican Republic</option>
            <option value="FR">France</option>
            <option value="GE">Georgia</option>
            <option value="DE">Germany</option>
            <option value="GR">Greece</option>
            <option value="HK">Hong Kong</option>
            <option value="IS">Iceland</option>
            <option value="IR">Iran, Islamic Republic of</option>
            <option value="IT">Italy</option>
            <option value="JP">Japan</option>
            <option value="LB">Lebanon</option>
            <option value="MY">Malaysia</option>
            <option value="MX">Mexico</option>
            <option value="TN">Tunisia</option>
            <option value="TR">Turkey</option>
            <option value="UA">Ukraine</option>
            <option value="AE">United Arab Emirates</option>
            <option value="GB">United Kingdom</option>
            <option value="US">United States</option>
            <option value="UY">Uruguay</option>
            <option value="UZ">Uzbekistan</option>
            <option value="VG">Virgin Islands, British</option>
            <option value="VI">Virgin Islands, U.s.</option>
          </select>
        </label>
        {/* end of dropdown */}
        <button onClick={handleSubmitModifications} type="submit">
          Submit
        </button>
      </div>

      <div className="gpt3__profile_container-showcase">
        {/* img content */}
      </div>
    </div>
  );
}
