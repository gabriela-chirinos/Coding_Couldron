export default function FAQs() {
    const faqs = [
        {
          question: "What is the difference between the Free and Paid versions?",
          answer:
            "Think of the Free version like borrowing a book from the Hogwarts library—it gives you access to the basics. The Paid version, however, is like owning the Marauder’s Map—it unlocks hidden features and exclusive magic!",
        },
        {
          question: "Do I need coding knowledge to use this product?",
          answer:
            "Not at all! Just like first-years at Hogwarts, you don’t need prior spell-casting experience. Our magical interface is designed to guide you, no wand-waving required!",
        },
        {
          question: "Do you have student or non-profit discounts?",
          answer:
            "Absolutely! Whether you're a Hogwarts student or a dedicated member of Dumbledore’s Army, we offer special discounts for students and non-profits. Just send us your owl (or email) for more details!",
        },
        {
          question: "Is there a way to become an Affiliate reseller?",
          answer:
            "Yes! Think of it as joining the Order of the Phoenix—spread the magic and be rewarded for bringing more wizards into our world! Contact us to learn how to become a certified ambassador.",
        },
        {
          question: "How is the price determined?",
          answer:
            "Our pricing is as fair as the Goblet of Fire—no tricks, just transparent value based on features, usage, and wizarding needs!",
        },
        {
          question: "What forms of payment do you accept?",
          answer:
            "We accept Muggle money (credit cards, PayPal, and bank transfers), but unfortunately, Gringotts does not currently allow us to process Galleons, Sickles, or Knuts.",
        },
      ];
  
    return (
      <section className="bg-[#101829] py-16 px-6 md:px-12 lg:px-16 text-white">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
          FAQs
        </h2>
  
        {/* FAQs Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="text-gray-400 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  