import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import { RegisterForm } from './components/RegisterForm';
import { RegForm } from './components/RegForm';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom"

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
//whether dark mode is enabeled or not
const [mode, setMode] = useState('light');
const toggleMode=()=>{
  if (mode === 'light') {
    setMode('dark'); 
    document.body.style.backgroundColor = '#50577A'; 
    showAlert("Dark Mode has been Enabled","success"); 
    document.title = "Text-Utility (Dark Mode)"
  } else {
    setMode('light'); 
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been Enabled","success"); 
    document.title = "Text-Utility (Light Mode)"
  }

}
const changegreen = ()=>{
  
  document.body.style.backgroundColor = '#35C649'
}
const changeyellow = ()=>{
  document.body.style.backgroundColor = '#CAB911'
}
const changered = ()=>{
  document.body.style.backgroundColor = '#C15031'
}

  return (
    <>
    
    <Navbar title ="TextUtils" link="searchlinks" mode = {mode} toggleMode={toggleMode} changegreen={changegreen} changered={changered} changeyellow={changeyellow}/>
    <Alert alert={alert}/>
    <TextForm showAlert={showAlert} titleoftext="ENTER TEXT FOR ANALYSIS!" mode = {mode} />
    <RegForm showAlert={showAlert} mode = {mode}/>
    {/* <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/regform" element={<RegForm showAlert={showAlert} mode = {mode}/>} />
        <Route path="/" element={<TextForm showAlert={showAlert} titleoftext="ENTER TEXT FOR ANALYSIS!" mode = {mode} />} />
      </Routes>
    </BrowserRouter>
    </div> */}
  </>
  );
}

export default App;
{/* <TextForm showAlert={showAlert} titleoftext="ENTER TEXT FOR ANALYSIS!" mode = {mode} /> */}