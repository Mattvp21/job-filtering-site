import { useContext, useState } from 'react'
import data from '../data.json'
import p1 from "../images/photosnap.svg"
import p2 from '../images/manage.svg'
import p3 from '../images/account.svg'
import p4 from '../images/myhome.svg'
import p5 from '../images/loop-studios.svg'
import p6 from '../images/faceit.svg'
import p7 from '../images/shortly.svg'
import p8 from '../images/insure.svg'
import p9 from '../images/eyecam-co.svg'
import p10 from '../images/the-air-filter-company.svg'

let images = {
    p1,p2,p3,p4,p5,p6,p7,p8,p9,p10
}
export default function Joblist({jobs,setJobs,setFilteredJobs, filteredJobs}) {
   
   

    const handleRoleFilter = (job) => {
       const filteredRole = jobs.filter(item => item.role === job.role)
       if(filteredJobs.includes(job.role) ) {
        return;
    }
      setJobs(filteredRole)
      setFilteredJobs([...filteredJobs,job.role])
    }

    const handleLevelFilter = (job) => {
        const filteredRole = jobs.filter(item => item.level === job.level)
        setJobs(filteredRole)
        if(filteredJobs.includes(job.level)) {
            return;
        }
        setFilteredJobs([...filteredJobs,job.level])
     }

     const handleLanguageFilter = (job, e) => {
        const filteredRole = job.languages.filter(item => item.languages === job.languages)
        if(filteredJobs.includes(job.languages)) {
            return;
        }
        setJobs(filteredRole)
        
        setFilteredJobs([...filteredJobs,job.languages])
     }

     const handleToolFilter = (job) => {
        const filteredRole = job.tools.filter(item => item.tools === job.tools)
        if(filteredJobs.includes(job.tools)) {
            return;
        }
        setJobs(filteredRole)
        
        setFilteredJobs([...filteredJobs,job.tools])
     }

     
   
    return (
        <section className="container font-league-spartan max-w-xs md:max-w-4xl xl:max-w-6xl">
            {jobs.map((job) => {
                return (
                    <div key={job.id} className="relative mt-14 flex flex-col md:flex-row  bg-white rounded shadow-xl ext-base font-bold md:max-w-4xl xl:max-w-6xl">
                <div className="flex w-2/12  flex-row justify-between items-center p-5">
                   <div className='w-14 mb-14 md:m-0 absolute m md:w-32 md:relative'>
                        <img src={job.id === 1 ? p1 : job.id === 2 ? p2 :
                        job.id === 3 ? p3 : job.id === 4 ? p4 :
                        job.id === 5 ? p5 : job.id === 6 ? p6 :
                        job.id === 7 ? p7 : job.id === 8 ? p8 :
                        job.id === 9 ? p9 : job.id === 10 ? p10 : null} alt={job.company}/>
                   </div>
                </div>
               <div className='container max-h-full p-4 md:flex'>
                    <div className='  border-solid border-2 border-r-0 border-t-0 border-l-0 md:border-b-0'>
                        <ul key={job.id} className='flex justify-start'>
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
                    {job.languages.map((language) => {
                        return <li onClick={() => handleLanguageFilter(job)} className='bg-filteringLightCyan hover:bg-primaryCyan hover:text-white p-2 rounded md:ml-3 ml-1'>{language}</li>
                    })}
                    {job.tools.map((language) => {
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

