import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import Griffyndor from "/assets/griffyndor.png"
import Slitheran from "/assets/slitheran.png"
import Hufflepuff from "/assets/hufflepuff.png"
import Ravenclaw from "/assets/ravenclaw.png"

const features = [
  {
    id: 1,
    title: "Gryffindor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    img: Griffyndor, // Update with actual icon paths
  },
  {
    id: 2,
    title: "Slytherin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      img: Slitheran,
  },
  {
    id: 3,
    title: "Hufflepuff",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      img: Hufflepuff,
  },
  {
    id: 4,
    title: "Ravenclaw",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    img: Ravenclaw,
  },
];

// -----------  function ------------


export default function FeatureSection() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h3 className=" mb-4 pb-1 text-2xl md:text-3xl lg:text-4xl font-bold text-[#6366f2]">
         Magic is Real
        </h3>
        <div className="bg-[#101829] py-10 px-6 text-center md:text-left">
  <blockquote className="max-w-3xl mx-auto text-lg md:text-xl font-semibold text-white">
    "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light."
  </blockquote>
  <p className="text-gray-400 mt-4 text-sm md:text-base lg:text-center" >— Albus Dumbledore</p>
</div>
      </div>
      

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-[#1e253b] p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-110  hover:bg-[#e7d390] "
          >
            {/* Icon */}
            <div className="flex items-center space-x-3">
              <img src={feature.img} alt={feature.title} className="w-10 h-10" />
              <h4 className="text-white text-lg font-semibold">{feature.title}</h4>
            </div>
            {/* Description */}
            <p className="text-gray-400 text-sm mt-3">{feature.description}</p>
            {/* Learn More */}
            <a href="#" className="text-[#6366f2] font-semibold mt-4 inline-block">
              Learn More →
            </a>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center space-x-6 mt-10">
        <button className="p-3 bg-[#1c1f2a] text-gray-400 rounded-full  cursor-pointer hover:bg-[#e7d390] ">
          <FaArrowLeft className="w-5 h-5" />
        </button>
        <button className="p-3 bg-[#1c1f2a] text-gray-400 rounded-full  cursor-pointer hover:bg-[#e7d390]">
          <FaArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
