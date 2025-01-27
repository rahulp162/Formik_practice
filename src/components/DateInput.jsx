import { ErrorMessage, Field } from 'formik'
import DateView from 'react-datepicker'
//import '../../node_modules/react-datepicker/dist/rea'

import 'react-datepicker/dist/react-datepicker.css'
import errorText from './errorText'


const DateInput = (props)=>{
    const {name,label,...rest} = props
    return(
        <div className='form-control' >
            <label htmlFor={name} >{label}</label>
            <Field name={name} >
                {
                    ({form,field})=>{
                        const {setFieldValue} = form
                        const {value} = field
                        return <DateView 
                            id={name}
                            {...field}
                            {...rest}
                            selected={value}
                            onChange={(val)=>setFieldValue(name,val)}
                        />
                    }
                }
            </Field>
            <ErrorMessage name={name} component={errorText} />
        </div>
    )
}

export default DateInput