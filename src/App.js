import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import HomePage from './Components/HomePage/HomePage';
import Headers from './organisms/header/header.js'
import FeedsPage from './Components/FeedsPage/FeedsPage';
import Recommended from './organisms/Recommended/Recommended';


function App() {
  return (
    <div className="App">
    <Headers /> 
      <HomePage/>

      <FeedsPage> </FeedsPage>           
    <Recommended></Recommended>
       {/* <Cardlayout />        */}
        </div> 
  );
}

export default App;
