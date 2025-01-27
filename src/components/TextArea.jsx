import { ErrorMessage, Field } from "formik";
import errorText from "./errorText";

const TextArea = (props)=>{
    const {name,label,...rest} = props;  
    return (<div id="fieldContainer" className="form-control">
        <label htmlFor={name} >{label}</label>
        <Field as='textarea' id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={errorText} />
    </div>)
}
export default TextArea