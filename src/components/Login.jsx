import { Form, Formik } from "formik"
import FormikControl from "../components/container-control/FormikControl"
import * as Yup from 'yup'
const Login = ()=>{
    const initialValues = {
        email:'',
        password: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email").required("Email is required"),
        password: Yup.string().required("Email is required"),
    })
    const HandleSubmit = (values)=>{
        console.log("Submitted: ",values)
    }
    return (
        
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onChange={(val)=>console.log("state: ",val)}
            onSubmit={HandleSubmit}
        >
            {
                (formik)=>{
                    return (
                        <Form>
                            <FormikControl control="email" name="email" label="Email" />
                            <FormikControl control="input" name="password" label="Password" />
                            <button type="submit" >Submit</button>
                        </Form>
                    )
                }
            }
        </Formik> 
        
    )
}

export default Login