import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React ,{useState}from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light')// whether dark mode is enable or not
  //Alert start
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) =>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  //Alert end
  //Darkmode toggle start
  const toggleMode = () => {
    if (Mode ==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#202124';
      showAlert("Dark mode has been enabled","success");
      // document.title="Textutils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      // document.title="Textutils - Light Mode";

    }
  }
  // Dark mode toggle end
  return (
    <Router>
       <Navbar title = {"TextUtils"} mode = {Mode} toggleMode= {toggleMode}/>
       <Alert alert = {alert}/>
       <div className="container my-3">
       <Routes>
          <Route exact path="/about" element={<About mode ={Mode}/>}/>   
          <Route  path="/" element={<TextForm  showAlert ={showAlert} heading = "Enter the text to analyze below" mode = {Mode}/>}/>  
        </Routes>
       </div>
    </Router>
  );
}

export default App;
