
import { useContext } from 'react';
import './App.css';
import Filterbar from './components/Filterbar';
import Header from './components/Header';
import Joblist from './components/Joblist';
import axios from 'axios';
import { Jobs } from './JobContext';





function App() {
  
 
  return (
    <div>
      <Header/>
    <main className="relative min-h-screen bg-backgroundLightCyan font-serif flex flex-col justify-start items-center pb-20">
      <Filterbar/>
      <Joblist/>
    </main>
    </div>
    
  );
}

export default App;
