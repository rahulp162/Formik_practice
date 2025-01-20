import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"
import { TextField } from '@mui/material'

const MyForm = () => {
  const passwordRegEx=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  const phoneNumberRegEx=/^[2-9]{2}[0-9]{8}/
    const validationSchema=Yup.object().shape({
      name:Yup.string("invalid input").required("Name is  required"),
      email:Yup.string().email("invalid email").required("Email is required"),
      //phoneNumber:Yup.number().typeError("Invalid phone number").required("Phone Number is Required"),
      phoneNumber:Yup.string().matches(phoneNumberRegEx,"Invalid Phone Number").required("Phone Number is Required"),
      password:Yup.string().min(8,"Minimum length is 8 ").matches(passwordRegEx,"Password must have one upper, lower case, number, special symbol").required("Password is required"),
      confirmPassword:Yup.string().min(8,"Minimum length is 8 ").matches(passwordRegEx,"Password must have one upper, lower case, number, special symbol").oneOf([Yup.ref('password')],"Not matching password").required("Password is required"),
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

            <Field as={TextField} type="text" id="name" label="Name" name="name" error={props.errors.name && props.touched.name} helperText={<ErrorMessage name="name" component="div" style={{color:"red"}}/>} required />
          
            <Field as={TextField} name="phoneNumber" id="phoneNumber" label="Phone Number" error={props.errors.phoneNumber && props.touched.phoneNumber} helperText={<ErrorMessage name="phoneNumber" component="div" style={{color:"red"}}/>} required />
            <Field as={TextField} name="password" id="password" label="Password" error={props.errors.password && props.touched.password} helperText={<ErrorMessage name="password" component="div" style={{color:"red"}}/>} required />
            <Field as={TextField} name="confirmPassword" id="confirmPassword" label="Confirm Password" error={props.errors.confirmPassword && props.touched.confirmPassword} helperText={<ErrorMessage name="confirmPassword" component="div" style={{color:"red"}}/>} required />

          </div>
          <button type="submit">Submit</button>
          {console.log("Current Email Value:", props)}
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
