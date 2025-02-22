
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#101829] text-white py-12 mt-1">
    

      {/* 🏛️ Footer Columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 text-center md:text-left">
        
        {/* 📜 Column 1: "The Daily Prophet" */}
        <div>
          <h3 className="text-xl font-semibold text-[#e7d390]">The Daily Prophet</h3>
          <p className="text-gray-400 mt-2">Stay updated with the latest wizarding world news.</p>
          <button className="mt-3 bg-[#e7d390] text-black px-4 py-2 rounded-lg hover:bg-[#d4b973]">
            Subscribe
          </button>
        </div>

        {/* 📚 Column 2: "Wizarding Resources" */}
        <div>
          <h3 className="text-xl font-semibold text-[#e7d390]">Wizarding Resources</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-[#e7d390]">FAQ</a></li>
            <li><a href="#" className="hover:text-[#e7d390]">House Sorting Quiz</a></li>
            <li><a href="#" className="hover:text-[#e7d390]">Spells & Charms Guide</a></li>
          </ul>
        </div>

        {/* 🗺️ Column 3: "Marauder's Map" */}
        <div>
          <h3 className="text-xl font-semibold text-[#e7d390]">Marauder's Map</h3>
          <p className="text-gray-400 mt-2">Find us in Diagon Alley or send us an owl.</p>
          <div className="flex justify-center md:justify-start mt-3 space-x-4">
            <a href="#" className="hover:text-[#e7d390] text-xl"><FaTwitter /></a>
            <a href="#" className="hover:text-[#e7d390] text-xl"><FaGithub /></a>
            <a href="#" className="hover:text-[#e7d390] text-xl"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* 📏 Horizontal Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        <p>© 2025 The Wizarding Web. Made with magic & code. 🧙‍♂️✨</p>
      </div>
    </footer>
  );
}
