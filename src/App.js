import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React ,{useState}from 'react';


function App() {
  const [Mode, setMode] = useState('light')// whether dark mode is enable or not
  const toggleMode = () => {
    if (Mode ==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#121212';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
       <Navbar title = {"TextUtils"} mode = {Mode} toggleMode= {toggleMode}/>
       <div className="container my-3">
         {/* <About/> */}
       <TextForm heading = "Enter the text to analyze below" mode = {Mode}/>
       </div>
    </>
  );
}

export default App;
