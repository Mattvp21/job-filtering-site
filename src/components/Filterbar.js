
export default function Filterbar({keywords, clearAll, deleteKeyword}) {

        return (
            <section className="container max-w-xs md:max-w-4xl xl:max-w-6xl font-league-spartan ">

                 <div className=" relative -top-12  bg-white shadow-xl rounded text-base font-bold md:max-w-4xl xl:max-w-6xl">
                    <div className="flex justify-between items-center p-6">
                        <ul className="flex flex-wrap gap-4">
                        {
                            keywords.map((key, id) => {
                             return   <li key={id} onClick={() => deleteKeyword(key)} className='bg-filteringLightCyan text-primaryCyan hover:bg-primaryCyan hover:text-white p-2 rounded md:ml-3 ml-1'>{key}</li>
                            })
                        }
                        </ul>
                        <span onClick={() => clearAll()} className='text-darkPrimaryCyan'>clear</span>
                    </div>
                </div>
            </section>        
        )
}