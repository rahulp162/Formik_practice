import { useFormik } from "formik";
import * as Yup from "yup"

const ThirdForm = ()=>{
    const validate= values=>{
        let errors={};
        if(!values.name){
            errors.name="Name required"
        }else if(values.name.length<5){
            let remaining = 5-values.name.length;
            errors.name="Name is short, add "+remaining+" chars more."
        }

        if(!values.email){
            errors.email="Email is required"
        }else if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(values.email)){
            errors.email="Invalid Email"
        }
        
        return errors;
    }

    const validationSchema = Yup.object({
        name:Yup.string().required("Name required"),
        email:Yup.string().email("Incorrect email").required("Email required")
    })

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
        },
        onSubmit: values=>{
            console.log("Submitted: ",values)
        },
        validationSchema
    })
    console.log("Form state: ",formik.values)
    return (
        <>
            <form onSubmit={formik.handleSubmit} style={{
                display:'flex',
                flexDirection:"column"
            }}>
                <label>Name</label>
                <input type="text" name="name" {...formik.getFieldProps('name')} />
                {
                    formik.errors.name && formik.touched.name ?<div className="errorBox">{formik.errors.name}</div>:null
                }

                <label>Email</label>
                <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {
                    formik.errors.email && formik.touched.email ?<div className="errorBox" onBlur={formik.handleBlur} >{formik.errors.email}</div>:null
                }
                <button type="submit">submit</button>
            </form>
        </>
    )
}

export default ThirdForm;