import Spline from "@splinetool/react-spline";

const integrations = [
  { id: 1, img: "./assets/platform.png", name: "NIne" },
  { id: 2, img: "./assets/crest.png", name: "Crest" },
  { id: 3, img: "./assets/glasses.png", name: "Glasses" },
  { id: 4, img: "./assets/owl.png", name: "Owl" },
  { id: 5, img: "./assets/bolt.png", name: "Bolt" },
  { id: 6, img: "./assets/golden.png", name: "snitch" },
];

export default function Integrations() {
  return (
    <section className="bg-[#101829] py-16 text-center text-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold">
        An ecosystem of integrations
      </h2>

      {/* 3D Animated Cube */}
      <div className="relative mt-6 flex justify-center w-full  mx-auto">

      <Spline
        scene="https://prod.spline.design/wXzk7EeUsmaVu2FX/scene.splinecode" 
      />

<div className="absolute w-0.5 h-15 bg-gray-500 top-full left-1/2 transform -translate-x-1/2"></div>

      </div>


 
      

      {/* Horizontal Line */}
      <div className="relative flex justify-center mt-16">
        <div className="absolute w-[80%] h-0.5 bg-gray-500 top-1/2 left-1/2 transform -translate-x-1/2 "></div>
      </div>
      

      {/* Integration Cards */}
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className="bg-[#75777b] p-6 rounded-xl w-40 h-40 flex items-center justify-center transition-transform duration-300 hover:scale-120 hover:bg-[#f9fafa] cursor-pointer "
          >
            <img src={integration.img} alt={integration.name} className="w-12 h-12" />
          </div>
        ))}
      </div>
    </section>
  );
}
