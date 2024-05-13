import './App.css';
import Login from './components/account/Login';
import {Box} from "@mui/material";
import autoblog from './images/autoblog.png'
  
function App() {
  // const img_url = "autoblog.png";
  return (
    <div className="App">
    <Box>
    <img src={autoblog}></img>
      <Login />
      </Box>
    </div>
  );
}

export default App;

//   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>