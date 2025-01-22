import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup"
import errorText from "./errorText"
const Forth = ()=>{
    const validationSchema = Yup.object({
        social: Yup.object({
            facebook:Yup.string().required("Facebook Required"),
            linkedIn:Yup.string().required("LinkedIn required")
        })
    })
    return(<>
        <Formik 
            initialValues={{
                name:"",
                email:"",
                phone:["",""],
                phNumbers:[""],
                social:{
                    facebook:"",
                    linkedIn:""
                }
            }}
            
            validationSchema={validationSchema}

            validate={(values)=>{
                let error={}
                if(!values.name){
                    error.name="Name required"
                }
                if(!values.email){
                    error.email="Email required"
                }else if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(values.email)){
                    error.email="Invalid Email"
                }
                
                if(!error.phone) error.phone=[]
                if(!values.phone[0]){
                    error.phone[0]="Primary Phone Numbe required"
                }
                if(!values.phone[1]){
                    error.phone[1]="Secondary Phone Numbe required"
                }
                
                return error
            }}
            onSubmit={(values)=>{
                console.log("Submitted: ",values)
            }}
        >
            {formik=>{
                console.log("state: ",formik)
                return(
                    <Form className="form">
                        <Field name="name">
                            {
                                (props)=>{
                                    console.log("render props name: ",props)
                                    const {field, form, meta} = props
                                    return <div>
                                        <label htmlFor="name" >Name:</label>
                                        <input type="text" id="name" name="name" {...field} />
                                        {meta.touched && meta.error ?
                                            <ErrorMessage name="name" component={errorText} />
                                        :null}
                                    </div>
                                }
                            }
                        </Field>
                        <Field name="email">
                            {
                                (props)=>{
                                    console.log("render props email: ",props)
                                    const {field, form, meta} = props
                                    return <div>
                                        <label htmlFor="email" >Email:</label>
                                        <input type="email" id="email" name="email" {...field} />
                                        <ErrorMessage name="email" component={errorText} />
                                    </div>
                                }
                            }
                        </Field>
                        <div className="socials">
                            <br/>
                            Socials:
                            <br/>
                            <div>
                                <label htmlFor="facebook">FaceBook:</label>
                                <Field name="social.facebook" id="facebook" type="text" />
                                <ErrorMessage component={errorText} name="social.facebook" />
                            </div>
                            <div>
                                <label htmlFor="linkedIn">LinkedIn:</label>
                                <Field name="social.linkedIn" id="linkedIn" type="text" />
                                <ErrorMessage component={errorText} name="social.linkedIn" />
                            </div>
                            <br/>
                        </div>
                        
                        <div>
                            <label htmlFor="primaryPh">Primary Phone Number:</label>
                            <Field type="number" id="primaryPh" name="phone[0]" />
                            <ErrorMessage component={errorText} name="phone[0]" />
                        </div>
                        <div>
                            <label htmlFor="secondaryPh">Secondary Phone Number:</label>
                            <Field type="number" id="secondaryPh" name="phone[1]"  />
                            <ErrorMessage component={errorText} name="phone[1]" />
                        </div>
                        
                        <br/>
                        <label><br/>Array of phone numbers:</label> 
                        <FieldArray name="phNumbers">
                            {(fieldArrayProps)=>{
                                console.log("FieldArrayProps: ",fieldArrayProps)
                                const {push,remove,form} = fieldArrayProps;
                                const {values} = form;
                                console.log("vals: ",values)
                                return(<div className="form">
                                    {
                                        values.phNumbers.map((number,i)=>{
                                            return (
                                                <>
                                                    <label htmlFor="phNumbers">Phone Number: </label>
                                                    <input name={`phNumbers[${i}]`} />
                                                    <button onClick={()=>push('')}>+</button>
                                                    <button onClick={()=> i!=0? remove(i):null} >-</button>
                                                
                                                </>
                                            )
                                        })
                                    }
                                </div>)
                            }}
                        </FieldArray>
                        <button type="submit" id="submit">submit</button>
                    </Form>

                )
            }}
        </Formik>
    </>)
}
export default Forth;