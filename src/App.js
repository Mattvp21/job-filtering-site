import data from './data.json'
import {useState } from 'react';
import './App.css';
import Filterbar from './components/Filterbar';
import Header from './components/Header';
import Joblist from './components/Joblist';

function App() {
  const [filterKeywords, setFilterKeywords] = useState([]) 

  const addFilterKeywords = (data) => {
    if(!filterKeywords.includes(data)) {
      setFilterKeywords([...filterKeywords, data])
    }
  }
  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((d) => d !== data)
    setFilterKeywords(newKeywords)
  }

  const clearAll = () => {
    setFilterKeywords([])
  }
  
  return (
    <div>
      <Header/>
    <main className="relative min-h-screen bg-backgroundLightCyan font-serif flex flex-col justify-start items-center pb-20">
      {filterKeywords.length > 0 && ( 
        <Filterbar keywords={filterKeywords} clearAll={clearAll} deleteKeyword={deleteKeyword}/> 
      )}
      <Joblist jobs={data} keywords={filterKeywords} setKeywords={addFilterKeywords}/>
    </main>
    </div>
    
  );
}

export default App;
