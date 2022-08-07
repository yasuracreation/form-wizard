import './input-field.style.scss'

const Input =({labelText,valid ,errorMessage, ...otherProps})=>{
    return (
        <div className={`form-input-group ${valid ? '' : ' error'}`}>
            <label className="label">{labelText}</label>
            <input className={`form-input${valid ? '' : ' error'}`} {...otherProps} />
            {!valid && errorMessage && <span className="error-message">{errorMessage}</span>}
        </div>
    )

}
export default Input;