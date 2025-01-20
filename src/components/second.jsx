import { TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup"
const SecondForm = ()=>{
    const validationSchema = Yup.object().shape({
        name:Yup.string("Enter a valid string").required("required"),

    })
    return(
        <>
            <Formik
                initialValues={{name:""}}
                validationSchema={validationSchema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                {(props)=>(
                    <Form>
                        <label>name:</label>
                        <Field as={TextField} name="name" helperText={<ErrorMessage name="name" component="div" style={{color:"red"}} />} />
                        <button type="submit" >submit</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default SecondForm;