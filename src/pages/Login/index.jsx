import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import './styles.scss';

const Login = () => {
    const navigate = useNavigate()

    return(
        <div className="Login">
            {/* Study Reusable Component for reusable button
            Study Material UI 
            Study Vue 2*/}
            
            <div className="login-container">
                <button className="back-btn">
                    <span>
                        <AiOutlineArrowLeft />
                    </span>
                </button> 
                <form className="login-form">
                    <h1>Login</h1>
                    <div className="form-item">
                        <label htmlFor="">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="Your email or phone"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="btn-container">
                        <p className="forgot-password">Forgot Password?</p>
                        <button className="login-btn">login</button>
                        <p className="sign-up">Don't have an account? <span>Sign Up</span></p>
                    </div>
                </form>
                <form className="sign-in-with">
                    <fieldset>
                    <legend>Sign in with</legend>
                        <div className="social-signin">
                            <div className="social-item">Facebook</div>
                            <div className="social-item">Google</div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Login;