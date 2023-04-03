import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes/MyRoutes';
import './App.scss';
// import { ThemeContext } from './contextx/theme.context';
// import { useState } from 'react';

function App() {
  // const [theme, setTheme] = useState('light');

  return (
    <div className="App">
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App;
