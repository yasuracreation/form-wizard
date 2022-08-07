import { Input ,useValidation } from 'usethef'


const email = value =>
  !(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
    ? (value && value !== "" ? undefined : "Required")
    : "Mail not Valid";

const Email = (...otherProps)=>{
    
    const invalidEmail =(emailInput)=> email(emailInput);
    
     
    return (
        <div className={`${invalidEmail?'error-field':'field'}`}>
           <label className='label'>Email</label>
           <div className='control'>
            <input 
            type='email' className='input' 
            placeholder='Enter Email Address' 
            name='email' 
            onBlur={invalidEmail}
            {...otherProps}>
                
            </input>
           </div>
           { invalidEmail && 
             <span className='error' >{invalidEmail}</span>
           }
           
        </div>
    )
}

export default Email;