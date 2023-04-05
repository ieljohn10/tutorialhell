import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
// import { FiEye, FiEyeOff } from "react-icons/fi";
import './styles.scss';
import { IconContext } from "react-icons";

const Login = () => {
    const navigate = useNavigate()

    return(
        <div className="Login">
            {/* Study Reusable Component for reusable button
            Study Material UI 
            Study Vue 2*/}
            {/* json base web server for beginner  */}
            {/* JWT auth */}
            
            <div className="container">
                <button className="back-btn" onClick={()=>navigate('/')}>
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
                    <div className="form-item password">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password"/>
                        {/* {true ? <FiEye /> :<FiEyeOff />} */}
                    </div>
                    <div className="btn-container">
                        <p className="forgot-password">Forgot Password?</p>
                        <button className="login-btn" onClick={()=>navigate('/home')}>login</button>
                        <p className="sign-up">Don't have an account? <span onClick={()=>navigate('/signup')}>Sign Up</span></p>
                    </div>
                </form>
                <form className="sign-in-with">
                    <fieldset>
                    <legend>Sign in with</legend>
                        <div className="social-signin">
                            <div className="social-item">
                               <IconContext.Provider
                                value={{size: '38px', color: '#1877F2'}}>
                                <BsFacebook />
                                </IconContext.Provider>
                                <p>FACEBOOK</p>
                            </div>
                            <div className="social-item">
                                <IconContext.Provider
                                    value={{size: '38px'}}>
                                    <FcGoogle />
                                </IconContext.Provider>
                                    <p>GOOGLE</p>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Login;