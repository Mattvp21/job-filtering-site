
import { useEffect, useState } from "react"
import Job from "./Job"
export default function Joblist({jobs, setKeywords, keywords}) {
    const [filteredData, setFilteredData] = useState([])
    
    const modifiedData = () => {
        if(keywords) {
            const newData = jobs.filter((d) => {
                return keywords.every((key) => {
                    return (
                        d.role === key ||
                        d.level === key ||
            d.languages.includes(key) ||
            d.tools.includes(key)
                    )
                })
            });
            setFilteredData(newData)
        } else {
            setFilteredData(jobs)
        }
    }
    useEffect(() => {
        modifiedData()
    }, [keywords])
   
   
    return (
        <section className="container font-league-spartan max-w-xs md:max-w-4xl xl:max-w-6xl">
            { filteredData.map((job) => {
              return  <Job key={job.id} data={job} setKeywords={setKeywords} />
            })}
             
        </section>
    )
}

