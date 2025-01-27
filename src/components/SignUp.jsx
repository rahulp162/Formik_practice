import { Form, Formik } from "formik";
import FormikControl from "./container-control/FormikControl";
import * as Yup from "yup";

const SignUp = () => {
    const initialValues = {
        email: '',
        password: '',
        co_password: '',
        moc: '',
        phone: ''
    };

    const moc_options = [
        { key: "Email", value: "email" },
        { key: "Phone Number", value: "phone" },
    ];

    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    const validationSchema = Yup.object({
        email: Yup.string().required("Email is required"),
        password: Yup.string().matches(passwordRegex, "Make a strong password").required("Password is required"),
        co_password: Yup.string().oneOf([Yup.ref('password')], "Password Not Matching").required("Required"),
        moc: Yup.string().required("Required"),
        phone: Yup.string().when("moc", {
            is: "phone",
            then: Yup.string().required('Phone number is required')
        })
    });

    const handleSubmit = (vals) => {
        console.log("Submitted: ", vals);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {formik => (
                <Form>
                    <FormikControl control="email" name="email" label="Email" />
                    <FormikControl control="input" name="password" label="Password" />
                    <FormikControl control="input" name="co_password" label="Confirm Password" />
                    <FormikControl control="radio" name="moc" label="Select the Mode Of Contact" options={moc_options} />
                    
                    {formik.values.moc === "phone" && (
                        <FormikControl control="input" name="phone" label="Phone Number" />
                    )}

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default SignUp;
