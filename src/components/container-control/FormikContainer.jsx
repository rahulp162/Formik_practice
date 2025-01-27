import { Form, Formik } from "formik"
import * as Yup from "yup"
import FormikControl from "./FormikControl"
const FormikContainer = ()=>{
    const initialValues = {
        name:"",
        description:"" ,
        selectOption:"",
        radioOption:'',
        checks:[],
        dateInput:null
    }
    const validationSchema = Yup.object({
        name:Yup.string().required("Name required"),
        description:Yup.string().required("Description required"),
        selectOption: Yup.string().required("Please select an option"),
        radioOption: Yup.string().required("Please select an option"),
        checks: Yup.array().min(1,"Please check atleast 1 box"),
        dateInput: Yup.date().min(new Date("2025-01-01"),"Date Must be after 01-01-2025").required("Please select a date")
    }) 
    const submitForm = (values)=>(
        console.log("Submitted: ",values)
    )

    const dropDownOptions = [
        {key:'select an option', value:''},
        {key:'Option 1', value:'option1 value'},
        {key:'Option 2', value:'option2 value'},
        {key:'Option 3', value:'option3 value'},
    ]
    const radioOptions = [
        {key:'Option 1', value:'option1 value'},
        {key:'Option 2', value:'option2 value'},
        {key:'Option 3', value:'option3 value'},
    ]
    const checkList = [
        {key:'Option 1', value:'option1 check value'},
        {key:'Option 2', value:'option2 check value'},
        {key:'Option 3', value:'option3 check value'},
    ]
    return(<>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitForm}>
        { formik=>(<>
                <Form style={{
                    textAlign:"left"
                }} >
                    <FormikControl control='input' name='name' label='Name' />
                    <FormikControl control='textarea' name='description' label='Description' />
                    <FormikControl control='select' name='selectOption' label='Select an Option' options={dropDownOptions}/>
                    <FormikControl control='radio' name='radioOption' label='Only One Option' options={radioOptions}/>
                    <FormikControl control='checkbox' name='checks' label='Check the box' options={checkList}/>
                    <FormikControl control='datepicker' name='dateInput' label='Select the Date'/>
                    <button type="submit" >submit</button>
                </Form>
                </>
            )   
        }
    </Formik>
    </>)
}
export default FormikContainer