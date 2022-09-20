import { useContext, useState } from 'react'
import Test from '../images/photosnap.svg'
import { Jobs } from '../JobContext'


export default function Joblist() {
    const data = useContext(Jobs)
    const [filteredJobs, setFilteredJobs] = useState([])
    const [jobs, setJobs] = useState(data)
    

    const handleRoleFilter = (job) => {
       const filteredRole = jobs.filter(item => item.role === job.role)
       if(filteredJobs.includes(job) ) {
        return;
    }
      setJobs(filteredRole)
      setFilteredJobs([job.role])
    }

    const handleLevelFilter = (job) => {
        const filteredRole = jobs.filter(item => item.level === job.level)
        setJobs(filteredRole)
        setFilteredJobs([...filteredJobs,job.level])
     }

     const handleLanguageFilter = (job) => {
        const filteredRole = jobs.filter(item => item.languages === job.languages)
        setJobs(filteredRole)
        setFilteredJobs([...filteredJobs,job.languages])
     }

     const handleToolFilter = (job) => {
        const filteredRole = jobs.filter(item => item.tools === job.tools)
        setJobs(filteredRole)
        
        setFilteredJobs([...filteredJobs,jobs.tools.filter(job => job.tools)])
     }
   console.log(data)
    return (
        <section className="container font-league-spartan max-w-xs md:max-w-4xl xl:max-w-6xl">
            {jobs.map((job) => {
                return (
                    <div key={job.id} className="relative mt-14 flex flex-col md:flex-row  bg-white rounded shadow-xl ext-base font-bold md:max-w-4xl xl:max-w-6xl">
                <div className="flex w-2/12  flex-row justify-between items-center p-5">
                   <div className='w-14 mb-14 md:m-0 absolute m md:w-32 md:relative'>
                        <img src={job.logo} alt={job.company}/>
                   </div>
                </div>
               <div className='container max-h-full p-4 md:flex'>
                    <div className='  border-solid border-2 border-r-0 border-t-0 border-l-0 md:border-b-0'>
                        <ul key={data.id} className='flex justify-start'>
                            <li className='mt-0.5 text-md md:text-lg text-primaryCyan'>{job.company}</li>
                            {job.new ? <li className=' text-white text-center text-md md:text-lg bg-primaryCyan w-14 rounded-full p-1 ml-3'>NEW!</li> : false}
                            {job.featured ? <li className=' text-white text-center text-md md:text-lg bg-black w-100 rounded-full p-1 ml-3'>FEATURED!</li> : false}
                            
                        </ul>
                        <ul className='flex justify-between mt-2'>
                            <li className='text-md md:text-lg'>{job.position}</li>
                        </ul>
                        <ul className='flex justify-start mt-2'>
                        <li className=' text-darkGrayishCyan md:text-lg'>{job.postedAt}</li>
                        <li className=' text-darkGrayishCyan md:text-lg ml-3'>{job.contract}</li>
                        <li className=' text-darkGrayishCyan  md:text-lg ml-3'>{job.location}</li>
                        </ul>
                    </div>
                    
               
               <div className='relative flex flex-wrap text-md text-primaryCyan mt-2 md:text-lg md:w-4/5 md:m-5 md:h-3 lg:ml-32'>
                
                    <ul className='flex flex-wrap'>
                    <li onClick={() => handleRoleFilter(job)} className='bg-filteringLightCyan hover:bg-primaryCyan hover:text-white p-2 rounded md:ml-3 ml-1'>{job.role}</li>
                    <li onClick={() => handleLevelFilter(job)} className='bg-filteringLightCyan hover:bg-primaryCyan hover:text-white p-2 rounded md:ml-3 ml-1'>{job.level}</li>
                    {job.languages.map((language, i) => {
                        return <li onClick={() => handleLanguageFilter(job)} className='bg-filteringLightCyan hover:bg-primaryCyan hover:text-white p-2 rounded md:ml-3 ml-1'>{language}</li>
                    })}
                    {job.tools.map((language, i) => {
                        return <li onClick={() => handleToolFilter(job)}  className='bg-filteringLightCyan hover:bg-primaryCyan hover:text-white p-2 rounded md:ml-3 ml-1'>{language}</li>
                    })}
                    </ul>
               </div>
               </div>
            </div>
                )
            })}
            
        </section>
    )
}