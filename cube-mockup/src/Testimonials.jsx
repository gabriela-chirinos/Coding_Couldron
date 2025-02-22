import weasleyImage from "/assets/waesley.png";
import germioniImage from "/assets/germioni.png";
import harryImage from "/assets/harrypotter.jpg";


const reviews = [
    {
      id: 1,
      name: "Dr.Weasley",
      rating: "4.9/5",
      img: weasleyImage , // Replace with actual image URL
      text: "But Dudley didn't seem able to speak. Hands still clamped over his buttocks, he waddled as fast as he could into the kitchen.  ",
      stars: 5,
    },
    {
      id: 2,
      name: "Ms.Grainger",
      rating: "4.7/5",
      img: germioniImage,
      text: "Harry hurried into the living room. Loud bangings and scrapings were coming from behind the Dursleys' boarded-up fireplace, which had a fake coal fire plugged in front of it.",
      stars: 5,
    },
    {
      id: 3,
      name: "Harry Potter",
      rating: "4.9/5",
      img: harryImage,
      text: "What is it? gasped Aunt Petunia, who had backed into the wall and was staring, terrified, toward the fire. What is it, Vernon?",
      stars: 5,
    },
  ];

  export default function Testimonials() {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto text-center px-6">
  
          {/* Review Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-opacity-10 p-6 rounded-lg">
                {/* Profile Image */}
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-14 h-14 mx-auto rounded-full border-2 border-gray-700"
                />
  
                {/* Stars */}
                <div className="flex justify-center mt-4 space-x-1">
                  {Array.from({ length: review.stars }, (_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 3.316a1 1 0 011.902 0l1.518 4.668h4.908a1 1 0 01.592 1.807l-3.973 2.905 1.518 4.668a1 1 0 01-1.539 1.122L10 15.347l-3.977 2.905a1 1 0 01-1.539-1.122l1.518-4.668-3.973-2.905a1 1 0 01.592-1.807h4.908l1.518-4.668z" />
                    </svg>
                  ))}
                </div>
  
                {/* Testimonial Text */}
                <p className="mt-4 text-gray-300 italic">"{review.text}"</p>
  
                {/* Name & Rating */}
                <p className="mt-2 text-gray-400 font-semibold">
                  {review.name} - <span className="text-blue-400">{review.rating}</span>
                </p>
              </div>
            ))}
          </div>
  
          {/* Horizontal Line */}
          <hr className="mt-10 border-gray-600 opacity-50" />
        </div>
      </section>
    );
  }