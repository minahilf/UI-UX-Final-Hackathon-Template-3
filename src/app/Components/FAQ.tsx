// MADE WITH READYMADE UI 
import { useState } from 'react';

const FAQItem = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion" role="accordion">
      <button
        type="button"
        onClick={toggleAccordion}
        className={`toggle-button w-full text-base outline-none text-left font-semibold py-6 flex `}
      >
        <span className="mr-4">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42 42"
          className="w-3 fill-current ml-auto shrink-0"
        >
          <path
            className={`${isOpen ? 'hidden' : 'block'}`}
            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
          />
          <path
            d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
          />
        </svg>
      </button>
      <div
        className={`content transition-all duration-300 overflow-hidden ${
          isOpen ? 'pb-6 max-h-screen' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqItems = [
    {
      title: 'Delivery And Returns',
      content:"All purchases are subject to delivery fees. Standard delivery 4 to 9 business days Orders are processed and delivered Monday to Friday (excluding public holidays) Nike Members enjoy free returns."
    },
    {
      title: 'How This Was Made?',
      content:"This product was responsibly designed utilising recycled materials from post-consumer and/or post-manufactured waste. One of our biggest steps on our journey to zero carbon and zero waste is in choosing our materials because they account for more than 70% of any product's footprint. By reusing existing plastics, yarns and textiles, we significantly reduce our emissions. Our goal is to use as many recycled materials as possible without compromising on performance, durability and style. Learn more about our Move to Zero journey towards zero carbon and zero waste, including how we're working to design product with sustainability in mind and help protect the future of where we live and play.",
    },
    {
      title: 'Reviews (64)',
      content:
        'Wears more comfortable than expected. Good for running or walking in wet conditions. Can get half a size Benny333916046 - 15 Jan 2025, I try to pour a water in this shoes to test if it water proof ba aint. Its good for trail run cuz its comfortable, go to moutain. The only issue, is not, Nike User - 09 Jan 2025'
    },
    {
      title: 'Product Information',
      content:
        'Declaration of Importer: Direct import by the individual customer. Marketed by: Nike Global Trading B.V.',
    },
  ];

  return (
    <div className="font-sans divide-y rounded-lg max-w-4xl mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">View Product Details</h2>
      </div>
      {faqItems.map((item, index) => (
        <FAQItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}
