import { ErrorMessage, Field } from "formik"
import errorText from "./errorText"

const Email = (props)=>{
    const {name,label,...rest} = props
    return (
        <div className="form-control">
            <label htmlFor={name} >{label}</label>
            <Field id={name} name={name} type='email' {...rest} />
            <ErrorMessage name={name} component={errorText} />
        </div>
    )
}

export default Email