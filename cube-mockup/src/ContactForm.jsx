export default function ContactForm() {
    return (
      <section className="bg-[#101829] text-white py-16 px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold">Let’s Craft Magic Together! 🪄</h2>
        <p className="text-gray-400 mt-2">
          Have a magical project in mind? Drop us an owl!
        </p>
  
        {/* Contact Form */}
        <form className="mt-6 max-w-lg mx-auto text-left">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter your wizard name"
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-[#e7d390]"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your owl mail"
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-[#e7d390]"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold">Message</label>
            <textarea
              rows="4"
              placeholder="What magical inquiry do you have?"
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-[#e7d390]"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="bg-[#e7d390] text-black font-bold py-2 px-6 rounded-lg hover:bg-[#d4b973]"
          >
            Send an Owl ✉️
          </button>
        </form>
      </section>
    );
  }
  