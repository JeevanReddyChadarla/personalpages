import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import HomePage from './Components/HomePage/HomePage';
import Headers from './organisms/header/header.js'
import FeedsPage from './Components/FeedsPage/FeedsPage';

function App() {
  return (
    <div className="App">
    <Headers /> 
      <HomePage/>

      <FeedsPage> </FeedsPage>           
    </div>
  );
}

export default App;
