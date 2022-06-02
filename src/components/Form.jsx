import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import "../style/Form.css";

export default function Form() {
  const [formData, setFormData] = useState({
    email: "",
    psw: "",
    pswConfirmation: "",
    checkBox: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((formData) => {
      return {
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.psw === formData.pswConfirmation) {
      console.log("Successfully signed up");
      if (formData.checkBox) {
        console.log("Thanks for signing up for our newsletter!");
      }
    } else if (formData.psw !== formData.pswConfirmation) {
      console.log("psw dont match");
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          onChange={handleChange}
          name="psw"
          value={formData.psw}
          autoComplete="on"
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          onChange={handleChange}
          name="pswConfirmation"
          value={formData.pswConfirmation}
          autoComplete="on"
        />{" "}
        <br />
        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            onChange={handleChange}
            name="checkBox"
            value={formData.checkBox}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
