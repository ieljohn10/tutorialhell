import { IoMdBackspace } from "react-icons/io";
import { AiOutlineArrowLeft } from "react-icons/ai";
import './styles.scss';
import { useNavigate } from "react-router-dom";

const Verification = () => {
    const navigate = useNavigate();

    return(
        <div className="Verification">
            <div className="container">
                <button className="back-btn" onClick={() => navigate('/login')}>
                        <span>
                            <AiOutlineArrowLeft />
                        </span>
                </button> 

                <div className="textContainer">
                    <h1>Verification Code</h1>
                    <p>Please type the verification code sent to prelookstudio@gmail.com</p>
                </div>
                {/* Use regex to exclude character or operator signs */}
                <div className="code-container">
                    <input type='text' maxLength={1} name="num1" id="num1" className="code-item active" />
                    <input type='text' maxLength={1} name="num2" id="num2" className="code-item" />
                    <input type='text' maxLength={1} name="num3" id="num3" className="code-item" />
                    <input type='text' maxLength={1} name="num4" id="num4" className="code-item" />
                </div>
                <p className="please-resend">I don’t recevie a code! <span>Please resend</span></p>
                <div className="keypad-container">
                    <div className="key-number">1</div>
                    <div className="key-number">2</div>
                    <div className="key-number">3</div>
                    <div className="key-number">4</div>
                    <div className="key-number">5</div>
                    <div className="key-number">6</div>
                    <div className="key-number">7</div>
                    <div className="key-number">8</div>
                    <div className="key-number">9</div>
                    <div className="key-number">OK</div>
                    <div className="key-number">0</div>
                    <div className="key-number"><IoMdBackspace /></div>
                </div>
            </div>
        </div>
    )
}

export default Verification;