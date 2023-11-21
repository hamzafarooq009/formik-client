import React from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ContactUsMui = () => {
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <Box
        sx={{
          maxWidth: "800px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        //   background: "linear-gradient(135deg, #667eea 30%, #764ba2 90%)",
          backgroundColor: "#EED0D0",
          padding: "40px",
          color: "#fff",
        }}
      >
        <Typography variant="h3" color="#900000" gutterBottom style={{ fontWeight: "bold"}}>
          Contact Us
        </Typography>
        <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="fullName"
                name="fullName"
                type="text"
                label="Full Name"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.fullName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                type="email"
                label="Email"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                label="Phone Number"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default ContactUsMui;