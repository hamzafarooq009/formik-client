import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactUs = () => {
  const convertTimeToSeconds = (time) => {
    const [hours, minutes] = time.split(".");
    return parseInt(hours, 10) * 3600 + parseInt(minutes, 10) * 60;
  };

  const validationSchema = Yup.object().shape({
    items: Yup.array().of(
      Yup.object().shape({
        time: Yup.string()
          .matches(/^\d{2}\.\d{2}$/, "Invalid time format")
          .required("Time is required"),
      })
    ),
  });

  const formik = useFormik({
    initialValues: {
      items: [{ time: "10.30" }, { time: "12.45" }],
    },
    onSubmit: async (values) => {
      const updatedItems = values.items.map((item) => ({
        ...item,
        timeInSeconds: convertTimeToSeconds(item.time),
      }));
      console.log(updatedItems);
      // Here, you'd proceed with your submission logic
    },
    validationSchema: validationSchema,
  });

  return (
    <div>
      <h4>Contact Us</h4>
      <form onSubmit={formik.handleSubmit}>
        {formik.values.items.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              value={item.time}
              onChange={(e) => {
                const updatedItems = [...formik.values.items];
                updatedItems[index].time = e.target.value;
                formik.setValues({ ...formik.values, items: updatedItems });
              }}
              placeholder="hh.mm"
            />
            {formik.errors.items && formik.errors.items[index] && (
              <div style={{ color: "red" }}>
                {formik.errors.items[index].time}
              </div>
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;