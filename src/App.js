
import { useState } from 'react';
import './App.css';
import Button from './component/button/button.component';
import Stepper from './component/stepper/stepper.component';
import FirstForm from './form-wizard/form-one/form-one.component';
import SecondForm from './form-wizard/form-two/form-two.component';
import TherdForm from './form-wizard/form-third/third-form.component';

function App() {

  const [state ,setState] = useState(1);
  const [validForm , setValidForm] = useState(true);
  const defualtFormFeilds = {
    firstName:"",
    lastName:"",
    email: ""
  };
  const [formFields,setFormFields] = useState(defualtFormFeilds);
  const formChange = (data)=>{
     setFormFields({...data});
     console.log(formFields);
     
  }
  const formValidate = ({validForm})=>{
   setValidForm(validForm);
   console.log(validForm)
  }
  const nextClickHandler = ()=>{
    if(state <= 3)
      setState(state + 1);
  }
  const prevClickHandler = ()=>{
    if (state > 1){
      setState(state -1);
    }
  }
 
  const submitHandler =()=>{
      console.log(formFields);
  }
  return (
    
    <div className="App">
      <div className='form-wizard'>
      <h2 className='header'>Wizard</h2>
        <Stepper step={state}/>
        {
          state === 1 && (
            <FirstForm defualtFormFeilds = {formFields} formChange={formChange} formValidate={formValidate}/>
          ) 
        } 
        {
          state === 2 && (
            <SecondForm defualtFormFeilds = {formFields} formChange={formChange} validateForm={formValidate} />
          )
        }
        {
          state === 3 && (
            <TherdForm formFields={formFields}/>
          )
        }
        <div className='buttons'>
         
          {
            state < 3 && (
              <Button onClick={nextClickHandler} disabled={!validForm} labelText={'Next'}  />
            ) 

          }

          {
            state === 3 && 
            (
              <Button onClick={submitHandler} disabled={!validForm}  labelText={'Submit'}  />

            )
          }
           {
            state > 1 && (
              <Button onClick={prevClickHandler} labelText={'Previous'} type="outline"  />
            )
          }
        </div>
      </div>
       
    </div>
  );
}

export default App;
