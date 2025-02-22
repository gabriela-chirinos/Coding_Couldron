import Testimonials from "./Testimonials";


export default function Features(){

    return(
    
        <section className="py-16 bg-gray-900 text-white text-center">
        <h2 className="text-5xl front-weight:900 mb-8">Why Choose Us?</h2>

        <Testimonials />

        <div grid grid-cols-1 md:grid-col2 lg:grid-col-3 gap-8 max-w-6xl mx-auto px-6>
             {/* Feature 1 */}
            <div className="p-6 bg-gray-800 rounded-lg">
            <span className="text-blue-400 text-3xl">👻</span>
            <h3 className="text-xl font-semibold mt-4"> Fast Performnace </h3>
            <p className="text-gray-400 mt-2"> Optimized for speed and efficiency</p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 bg-gray-800 rounded-lg">
                    <span className="text-green-400 text-3xl">🔒</span>
                    <h3 className="text-xl font-semibold mt-4">Top Security</h3>
                    <p className="text-gray-400 mt-2">Advanced security features to keep your data safe.</p>
                </div>

                {/* Feature 3 */}
               
                <div className="p-6 bg-gray-800 rounded-lg">
                    <span className="text-yellow-400 text-3xl">⚡</span>
                    <h3 className="text-xl font-semibold mt-4">Lightning Fast</h3>
                    <p className="text-gray-400 mt-2">Instant load times with cutting-edge technology.</p>
                </div>

                    {/* Feature 4 */}
                
                <div className="p-6 bg-gray-800 rounded-lg">
                    <span className="text-purple-400 text-3xl">📈</span>
                    <h3 className="text-xl font-semibold mt-4">Analytics & Insights</h3>
                    <p className="text-gray-400 mt-2">Detailed analytics to monitor your growth.</p>
                </div>

           
        </div>
    
        </section>
    
    
    )
    
    
    }