import "./button.style.scss"



const Button =({labelText,type,...otherProps})=>{
    return (
        <button className={`button ${type==='outline'? 'outline' : 'full'}`} {...otherProps}>
            {labelText}
        </button>
    )
}
export default Button;