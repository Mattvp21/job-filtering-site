import data from '../data.json'
import { useContext } from 'react'

export default function Filterbar({jobs, setJobs, setFilteredJobs, filteredJobs}) {
   
    const handleResetHandler = () => {
        setFilteredJobs([])
        setJobs(data)
    }
    
    const removeJobHandler = (job) => {
        setFilteredJobs(filteredJobs.filter((x,i) => x !== job))
        
        setJobs(data.filter((x,i) => !x.role.includes(filteredJobs) || !x.level.includes(filteredJobs)))
      
    }

   
    if(filteredJobs.length > 0) {
        return (
            <section className="container max-w-xs md:max-w-4xl xl:max-w-6xl font-league-spartan ">
                 <div className=" relative -top-12  bg-white shadow-xl rounded text-base font-bold md:max-w-4xl xl:max-w-6xl">
                    <div className="flex justify-between items-center p-6">
                        <ul className="flex flex-wrap gap-4">
                        {
                            filteredJobs.map((job) => {
                             return   <li onClick={() => removeJobHandler(job)} className='bg-filteringLightCyan text-primaryCyan hover:bg-primaryCyan hover:text-white p-2 rounded md:ml-3 ml-1'>{job}</li>
                            })
                        }
                        </ul>
                        <span onClick={() => handleResetHandler()}  className='text-darkPrimaryCyan'>clear</span>
                    </div>
                </div>
            </section>
           
        )
    }
    
}