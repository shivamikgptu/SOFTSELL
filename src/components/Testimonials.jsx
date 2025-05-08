export default function Testimonials() {
    const reviews = [
      {
        name: "Jane Doe",
        role: "IT Manager",
        company: "TechCorp",
        quote: "SoftSell made selling our extra licenses simple and fast."
      },
      {
        name: "John Smith",
        role: "Procurement Lead",
        company: "BizWare",
        quote: "I got a great valuation and quick payment. Highly recommend!"
      }
    ];
  
    return (
      <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-10">What Our Clients Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((t, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-800 rounded shadow"
            >
              <p className="italic mb-2">“{t.quote}”</p>
              <p className="font-semibold">- {t.name}, {t.role} @ {t.company}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }