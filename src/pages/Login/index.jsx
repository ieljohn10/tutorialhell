import { AiOutlineArrowLeft } from "react-icons/ai";
import './styles.scss';

const Login = () => {
    return(
        <div className="Login">
            {/* Study Reusable Component for reusable button
            Study Material UI 
            Study Vue 2*/}
            <button className="back-btn"><AiOutlineArrowLeft /></button> 
        </div>
    )
}

export default Login;