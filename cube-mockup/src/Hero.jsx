



export default function Hero() {

    return (
        <section className="relative w-full max-h-fit flex flex-col items-center justify-center text-center px-6  py-9" >
            <div className="  max-w-4xl mx-auto">
               
                <h1 text-4xl font-bold md:text-6xl>Build and Launch faster than ever</h1>
            </div>
            <p className="text-lg text-gray-300 mt-4">
            A beautiful dark theme landing page for your next SaaS project.
            </p>

            <div className="mt-6 flex  justify-center gap-4">
            <button className="mt-6 flex items-center bg-[#6366f2] hover:bg-blue-400 text-white font-bold py-2 px-6 rounded-lg transition-all">
    Get Started
    <svg 
        className="w-4 h-4 ml-2 transition-transform duration-200 ease-in-out" 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 14 10"
    >
        <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M1 5h12m0 0L9 1m4 4L9 9"
        />
    </svg>
</button>


            <button className="mt-6 flex items-center bg-[#324154] hover:bg-blue-400 text-white font-bold py-2 px-6 rounded-lg transition-all " >
    Read Docs
    <svg 
        className="w-4 h-4 ml-2 transition-transform duration-200 ease-in-out" 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 14 10"
    >
        <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M1 5h12m0 0L9 1m4 4L9 9"
        />
    </svg>
</button>


</div>
        </section>
    )

}

