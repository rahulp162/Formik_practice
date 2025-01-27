import { ErrorMessage, Field } from "formik"
import errorText from "./errorText"

const CheckBox=(props)=>{
    const { name, label, options, ...rest} = props
    return( 
        <div className="form-control">
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({field})=>{
                        return options.map((option)=>{
                            return(
                                <div key={option.key} >
                                    <input type='checkbox'
                                        id={option.value}
                                        {...field}
                                        value={option.value}
                                        checked={field.value.includes(option.value)}
                                    />
                                    <label htmlFor={option.value} >{option.key}</label>
                                </div>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={errorText} />
        </div>
    )
}
export default CheckBox