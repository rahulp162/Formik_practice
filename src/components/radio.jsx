import { ErrorMessage, Field } from "formik";
import errorText from "./errorText";
import React from "react";

const RadioButtons = (props) => {
  const { name, label, options, ...rest } = props;

  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) =>
            {
                //console.log("Field: ",field)
                return options.map((option) => {
                  return (<div key={option.key}>
                    <input
                      type='radio'
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={field.value === option.value} 
                    />
                    <label htmlFor={option.value}>{option.key}</label>
                  </div>)
                  }   )

            }
        }
      </Field>
      <ErrorMessage name={name} component={errorText} />
    </div>
  );
};

export default RadioButtons;
