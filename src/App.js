import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';


// let name="Ashwini";
function App() {
  const [mode,setmode]=useState('light');  //whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type

    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils-Dark Mode';
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils-Light Mode';
    }
  }
  return (
    // <div className="App">
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
    //       Learn React with Ashwini
    //     </a>
    //   </header>
    // </div>
    // <div className="blank">Lovely</div>

    <>

   {/* <Navbar title="TextUtils2" aboutText="About TextUtils"/> */}
     <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
   <div className="container my-3">
   <TextForm showAlert={showAlert} heading="Enter the text to Analyze below"mode={mode}/>
      
      {/* <About/> */}

   </div>

   
    </>
  );
}

export default App;
