import JSONDATA from '../../MOCK_DATA.json';
import { useState } from 'react';
import './search.scss';

// search for: 'Search Filter React Tutorial - Search Bar in React [PedroTech]'


const Search = () => {
	const [inputVal, setInputVal] = useState('');

	const searcHandle = (e) => {
		setInputVal(e.target.value);
		console.log(inputVal)
	}

	return(
		<div className='Search'>
			<input 
				type="text" 
				placeholder='Input data...'
				onChange={searcHandle}
			/>
			{
				JSONDATA.filter((val)=>{
					if(inputVal == ''){
						return val;
					} else if((val.first_name).includes(inputVal)){
						 return val;
					}
				}).map((item) => {
					return(
						<div className="user" key={item.id}>
							<p>{item.first_name}</p>
						</div>
					)
				})
			}
		</div>
	)
}

export default Search;