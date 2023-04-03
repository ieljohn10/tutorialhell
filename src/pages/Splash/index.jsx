useNavigate
import { useNavigate } from 'react-router-dom';
import './styles.scss';

function Splash() {
    const navigate = useNavigate();

    const pressedHandle = (e) => {
            console.log('A key was pressed');
            navigate('/login');
    }

    return(
       <div className="Splash" onTouchStart={pressedHandle}>
            <h3 className='splash-title'>Touch the screen</h3>
       </div>
    )
}

export default Splash;