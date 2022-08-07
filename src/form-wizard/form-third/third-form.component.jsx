import './third-form.style.scss';

const TherdForm = ({formFields})=>{
   

    return (
        
        <div className='form-wrapper'>
            <h3 className="form-hedding"> Confirmation</h3>
            <div className='group'>
                <span>First Name : </span>
                <span>{formFields.firstName}</span>
            </div>
            <div className='group'>
                <span>Last Name : </span>
                <span>{formFields.lastName}</span>
            </div> 
           <div className='group'>
                <span>Email: </span>
                <span>{formFields.email}</span>
           </div>
            

        </div>
    )
}
export default TherdForm;