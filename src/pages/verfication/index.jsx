import './styles.scss';

const Verification = () => {
    return(
        <div className="Verification">
            <div className="textContainer">
                <h1>Verification Code</h1>
                <p>Please type the verification code sent to prelookstudio@gmail.com</p>
            </div>
            {/* Use regex to exclude character or operator signs */}
            <div className="code-container">
                <input maxLength={1} name="num1" id="num1" className="code-item" />
                <input maxLength={1} name="num2" id="num2" className="code-item" />
                <input maxLength={1} name="num3" id="num3" className="code-item" />
                <input maxLength={1} name="num4" id="num4" className="code-item" />
            </div>
        </div>
    )
}

export default Verification;