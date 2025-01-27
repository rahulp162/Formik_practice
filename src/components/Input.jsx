import { ErrorMessage, Field } from "formik"
import errorText from "./errorText"

const Input = (props)=>{
    const {name,label,...rest}=props
    return(<div id="fieldContainer" className="form-control">
        <label htmlFor={name} >{label}</label>
        <Field name={name} id={name} {...rest} />
        <ErrorMessage name={name} component={errorText} {...rest}/>
    </div>)
}
export default Input