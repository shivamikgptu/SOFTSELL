export default function HowItWorks() {
    const steps = [
      { title: "Upload License", icon: "📤" },
      { title: "Get Valuation", icon: "💰" },
      { title: "Get Paid", icon: "✅" },
    ];
  
    return (
      <section className="bg-gray-50 dark:bg-gray-800 py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-10">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-700 rounded shadow-md"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h4 className="font-semibold text-xl">{step.title}</h4>
            </div>
          ))}
        </div>
      </section>
    );
  }