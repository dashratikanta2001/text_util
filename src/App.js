import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React ,{useState}from 'react';
import Alert from './components/Alert';


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
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  // Dark mode toggle end
  return (
    <>
       <Navbar title = {"TextUtils"} mode = {Mode} toggleMode= {toggleMode}/>
       <Alert alert = {alert}/>
       <div className="container my-3">
         {/* <About/> */}
       <TextForm  showAlert ={showAlert} heading = "Enter the text to analyze below" mode = {Mode}/>
       </div>
    </>
  );
}

export default App;
