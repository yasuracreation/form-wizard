import Input from "../../component/fields/input-field.component"
import { useState } from "react";
import './form-one.style.scss'

const FirstForm = ({defualtFormFeilds, formChange,formValidate}) => {
    const errors = {
        firstName:'',
        lastName:''
    }
    const [formFields, setFormFields] = useState(defualtFormFeilds);
    const [InvalidForm , setInvalidForm] = useState({errors});
    const { firstName, lastName } = formFields;
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        if(value.length < 2 ){
            errors[name] = 'Minimum 2 Characters required ';
           
        }else{
            errors[name] = '';
            formChange({ ...formFields, [name]: value });
        }
        setInvalidForm({errors})
        setFormFields({ ...formFields, [name]: value });
        const validForm = !(InvalidForm.errors.firstName.length > 0 || InvalidForm.errors.lastName.length > 0)
        formValidate({validForm});
       
    }
    return (
        <div>
            <h3 className="form-hedding"> Name</h3>
            <Input

                errorMessage={InvalidForm.errors.firstName}
                valid={!(InvalidForm.errors.firstName.length > 0)}
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={onChangeHandler}
            />
         
            <Input

                errorMessage={InvalidForm.lastName}
                valid={!(InvalidForm?.errors?.lastName?.length)}
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={onChangeHandler}
            />
           
        </div>
    )
}
export default FirstForm