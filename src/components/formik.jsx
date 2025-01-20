import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"
import { TextField } from '@mui/material'

const MyForm = () => {
    const validationSchema=Yup.object().shape({
      name:Yup.string("invalid input").required("Name is  required"),
      email:Yup.string().email("invalid email").required("Email is required"),
      phoneNumber:Yup.number("invald number").required("Phone Number is Required")
    })
  return (
    <Formik
      initialValues={{ email: "", name:"", phoneNumber:"" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form Submitted:", values);
      }}
    >
      {(props) => (
        <Form>
          <div style={{display:"flex",flexDirection:"column",textAlign:"left"}}>
            <Field as={TextField} type="email" id="email" label="Email" name="email" error={props.errors.email && props.touched.email} helperText={<ErrorMessage name="email" component="div" style={{color:"red"}}/>} required/>

            <Field as={TextField} type="text" id="name" label="Name" name="name" error={props.errors.name} helperText={<ErrorMessage name="name" component="div" style={{color:"red"}}/>} required />
          
            <Field as={TextField} name="phoneNumber" id="phoneNumber" label="Phone Number" error={props.errors.phoneNumber} helperText={<ErrorMessage name="phoneNumber" component="div" style={{color:"red"}}/>} required />

          </div>
          <button type="submit">Submit</button>
          {console.log("Current Email Value:", props)}
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
