export default function Navbar() {
    return (
        <nav className=" w-full bg-gray-900 py-6 px-6 flex justify-between items-center max-sm:flex-col sm:py-3">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-white">The Coding Cauldron</h1>
            
            {/* Navigation Menu */}
            <ul className="flex flex-col my-2 md:flex-row space-x-0 md:space-x-6 text-white py-4 md:py-6">
                <li className="pb-5 sm:pb-0">
                    <a href="#" className="  hover:text-gray-300 ">HOME</a>
                </li>
                <li className="pb-5 sm:pb-0">
                    <a href="#" className="hover:text-gray-300">FEATURES</a>
                </li>
                <li className="pb-5 sm:pb-0">
                    <a href="#" className="hover:text-gray-300">PRICING</a>
                </li>
                <li className="pb-5 sm:pb-0">
                    <a href="#" className="hover:text-gray-300">CONTACT</a>
                </li>
            </ul>

            {/* CTA Button */}
            <button className="bg-[#6366f2] text-white px-4 py-2 rounded-lg hover:bg-blue-400">
                Get Started
            </button>
            
        </nav>
    );
}
