export default function WhyChooseUs() {
    const reasons = [
      "Fast & Easy Process",
      "Best Market Rates",
      "Secure Transactions",
      "Trusted by Thousands",
    ];
  
    return (
      <section className="py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-10">Why Choose Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded shadow"
            >
              <div className="text-xl font-medium">✔️ {reason}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }