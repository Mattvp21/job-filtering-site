import React from 'react';
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

function Job(props) {
    const {
        company,
        contract,
        featured,
        id,
        languages,
        level,
        location,
        logo,
    
        position,
        postedAt,
        role,
        tools,
      } = props.data;
      let keywords = [role, level, ...languages, ...tools]
      console.log(keywords)
    return (
        <div key={id} className="relative mt-14 flex flex-col md:flex-row  bg-white rounded shadow-xl ext-base font-bold md:max-w-4xl xl:max-w-6xl">
    <div className="flex w-2/12  flex-row justify-between items-center p-5">
       <div className='w-14 mb-14 md:m-0 absolute m md:w-32 md:relative'>
            <img src={id === 1 ? p1 : id === 2 ? p2 :
            id === 3 ? p3 : id === 4 ? p4 :
            id === 5 ? p5 : id === 6 ? p6 :
            id === 7 ? p7 : id === 8 ? p8 :
            id === 9 ? p9 : id === 10 ? p10 : null} alt={company}/>
       </div>
    </div>
   <div className='container max-h-full p-4 md:flex'>
        <div className='  border-solid border-2 border-r-0 border-t-0 border-l-0 md:border-b-0'>
            <ul key={id} className='flex justify-start'>
                <li className='mt-0.5 text-md md:text-lg text-primaryCyan'>{company}</li>
                {props.data.new && <li className=' text-white text-center text-md md:text-lg bg-primaryCyan w-14 rounded-full p-1 ml-3'>NEW!</li>}
                {props.data.featured && <li className=' text-white text-center text-md md:text-lg bg-black w-100 rounded-full p-1 ml-3'>FEATURED!</li>}
                
            </ul>
            <ul className='flex justify-between mt-2'>
                <li className='text-md md:text-lg'>{position}</li>
            </ul>
            <ul className='flex justify-start mt-2'>
            <li className=' text-darkGrayishCyan md:text-lg'>{postedAt}</li>
            <li className=' text-darkGrayishCyan md:text-lg ml-3'>{contract}</li>
            <li className=' text-darkGrayishCyan  md:text-lg ml-3'>{location}</li>
            </ul>
        </div>
        
   
   <div className='relative flex flex-wrap text-md text-primaryCyan mt-2 md:text-lg md:w-4/5 md:m-5 md:h-3 lg:ml-32'>
    
        <ul className='flex flex-wrap'>
       {
        keywords.map((key, id) => (
            <li key={id} onClick={() => props.setKeywords(key)} className='bg-filteringLightCyan hover:bg-primaryCyan hover:text-white p-2 rounded md:ml-3 ml-1'>{key}</li>
        )
       )}
        </ul>
   </div>
   </div>
</div> )
}

export default Job;