import React from "react";
import { useFormik } from "formik";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <div>
        <h4>Contact Us</h4>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
            <button
              type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;