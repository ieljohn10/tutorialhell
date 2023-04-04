import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc"
import './styles.scss';
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    return(
       <div className="SignUp">
            <div className="signup-container">
                <form className="signup-form">
                    <h1>Sign Up</h1>
                    <div className="form-item">
                        <label htmlFor="">Full name</label>
                        <input type="text" name="fullname" id="fullname" placeholder="Your full name"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="Your email or phone number"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="btn-container">
                            <button className="signup-btn">SIGN UP</button>
                            <p className="login">Already have an account? <span onClick={()=>{navigate('/login')}}>Login</span></p>
                        </div>
                </form>
                <form className="sign-up-with">
                        <fieldset>
                        <legend>Sign up with</legend>
                            <div className="social-signup">
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

export default SignUp;