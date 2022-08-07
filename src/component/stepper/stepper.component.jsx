import './stepper.style.scss'



const Stepper = ({ step }) => {
    console.log(step);
    return (
        <div>
            <ul className="breadcrumb-container">
                <li>
                    <div className={`steps ${(step > 0) ? 'active' : ''}`}>
                        <span className="step-number">1</span>
                        <span className="step-text center-smallcontainer"> Name</span></div>
                </li>
                <li>
                    <div className={`steps ${(step >1 ) ? 'active' : ''}`}>
                        <span className="step-number">2</span>
                        <span className="step-text center-smallcontainer">Email</span></div>
                </li>
                <li>
                    <div className={`steps ${(step > 2) ? 'active' : ''}`}>
                        <span className="step-number">3</span>
                        <span className="step-text center-smallcontainer"> Confirmation</span></div>
                </li>

            </ul>
        </div>
    )
}
export default Stepper;