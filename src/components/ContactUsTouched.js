import { useFormik } from "formik";

const ContactUsTouched = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
    validate: (values) => {
      const errors = {};

      // Validation logic for each field
      if (!values.name) {
        errors.name = "Required";
      }

      return errors;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {console.log(formik.touched)}
      
      {/* Touched and error */}
      {/* {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null} */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactUsTouched;