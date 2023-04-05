import { RiArrowDropDownLine, RiSearchLine } from "react-icons/ri";
import FilterIcon from '../../assets/home/icons/filter@2x.svg';
import { IconContext } from "react-icons";
import Category from './data/categories';
import './styles.scss';

const Home = () => {
    return(
        <div className="Home">
            <div className="container">
                <div className="header">
                    <div className="hamburger-btn">
                        <div className="bar-container">
                            <span className="bar" />
                            <span className="bar" />
                        </div>
                    </div>
                    
                    <div className="deliver-to">
                        <div className="dropdown">
                            <p>Deliver to </p>
                            <IconContext.Provider value={{size: '18px', color: '#767F9D'}}>
                                <RiArrowDropDownLine/>
                            </IconContext.Provider>
                        </div>
                        <div className="location">
                            <p>4102  Pretty View Lane </p>
                        </div>
                    </div>
                    <img className="home-profile" src="data:image/jpeg;base64,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" alt="home profile" />
                </div>

                <h1 className="search-title">What would you like to order?</h1>

                <div className="search-container">
                    <div className="input-container">
                        <IconContext.Provider value={{size: '38px', color: '#767F9D'}}>
                            <RiSearchLine />
                        </IconContext.Provider>
                        <input type="text" name="search" id="search" placeholder="Find for food or restaurant..."/>
                    </div>
                    <img className='filterBtn' src={FilterIcon} alt="filter" />
                </div>
                <div className="category-container">
                    {
                        Category.map((item) => {
                            return(
                                <div className="category-item" key={item.id}>
                                    <img className='category-img' src={item.img} alt=''/>
                                    <p className='category-name'>{item.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;