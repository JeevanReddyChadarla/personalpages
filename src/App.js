import logo from './logo.svg';
import { ApolloProvider } from '@apollo/client';
import './App.css';
import 'antd/dist/antd.css';
import HomePage from './Components/HomePage/HomePage';
import Headers from './organisms/header/header.js'
import FeedsPage from './Components/FeedsPage/FeedsPage';
import Recommended from './organisms/Recommended/Recommended';
import client from './Apolloclient';
import { Testfile } from './organisms/Feeder/Testfile';


function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
    <Headers /> 
      {/* <HomePage/>

      <FeedsPage> </FeedsPage>           
    <Recommended></Recommended> */}
    <Testfile />
       {/* <Cardlayout />        */}
        </div> 
        </ApolloProvider>
  );
}

export default App;
