import CheckBox from "../checkBox"
import DateInput from "../DateInput"
import Email from "../email"
import Input from "../Input"
import RadioButtons from "../radio"
import SelectOption from "../SelectOption"
import TextArea from "../TextArea"

const FormikControl = (props)=>{
    const {control, ...rest} = props
    switch(control){
        case 'input':
            return <Input {...rest} />
        case 'email':
            return <Email {...rest} />
        case 'textarea':
            return <TextArea {...rest}/>
        case 'radio':
            return <RadioButtons {...rest} />
        case 'select':
            return <SelectOption {...rest} />
        case 'checkbox':
            return <CheckBox {...rest} />
        case 'datepicker':
            return <DateInput {...rest} />
        default: return null
    }
}

export default FormikControl
