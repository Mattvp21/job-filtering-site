import data from './data.json'
import { useContext, useState } from 'react';
import './App.css';
import Filterbar from './components/Filterbar';
import Header from './components/Header';
import Joblist from './components/Joblist';
import axios from 'axios';






function App() {
  
  const [filteredJobs, setFilteredJobs] = useState([])
  const [jobs, setJobs] = useState(data)
 
  return (
    <div>
      <Header/>
    <main className="relative min-h-screen bg-backgroundLightCyan font-serif flex flex-col justify-start items-center pb-20">
      <Filterbar jobs={jobs} setJobs={setJobs} filteredJobs={filteredJobs} setFilteredJobs={setFilteredJobs}/>
      <Joblist jobs={jobs} setJobs={setJobs} filteredJobs={filteredJobs} setFilteredJobs={setFilteredJobs}/>
    </main>
    </div>
    
  );
}

export default App;
