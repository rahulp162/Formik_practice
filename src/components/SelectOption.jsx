import { ErrorMessage, Field } from "formik";
import errorText from "./errorText";

const SelectOption=(props)=>{
    const {name,label,options, ...rest} = props;
    return (<div className="form-control">
        <label htmlFor={name} >{label}</label>
        <Field as='select' name={name} id={name} {...rest} >
            {
                
                options.map((option,i)=>(
                    <option key={i} value={option.value}>{option.key}</option>
                ))
                
            }
        </Field>
        <ErrorMessage component={errorText} name={name}/>
    </div>)
}
export default SelectOption