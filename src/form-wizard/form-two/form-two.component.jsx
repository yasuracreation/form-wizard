import Input from "../../component/fields/input-field.component";
import { useState } from "react";

const SecondForm = ({defualtFormFeilds, formChange, validateForm})=>{
    const errors = {
        email:''
    }
    const [InvalidForm , setInvalidForm] = useState({errors});
    const [formFields, setFormFields] = useState(defualtFormFeilds);
    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      );
   
      
    const { email } = formFields;
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        if(!validEmailRegex.test(value)){
            errors[name] = 'Invalid email address';
            validateForm(false)
        }else{
            errors[name] = '';
            formChange({ ...formFields, [name]: value });
        }
        setInvalidForm({errors})
        const validForm = !( InvalidForm.errors.email.length > 0);
        console.log(validForm);
        validateForm({validForm})
     
    }
    return (
    <div>
          <h3 className="form-hedding"> Email</h3>
           <Input 
            errorMessage={InvalidForm.errors.email}
            valid={!(InvalidForm.errors.email.length > 0)}
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChangeHandler}
           />
            
    </div>
    )
}
export default SecondForm;
