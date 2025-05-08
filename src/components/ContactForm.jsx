import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-16 px-6">
      <h3 className="text-2xl font-semibold mb-10 text-center">Contact Us</h3>
      <form
        className="max-w-xl mx-auto space-y-4"
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder="Name" required className="w-full p-3 rounded border" />
        <input type="email" placeholder="Email" required className="w-full p-3 rounded border" />
        <input type="text" placeholder="Company" className="w-full p-3 rounded border" />
        <select required className="w-full p-3 rounded border">
          <option value="">License Type</option>
          <option>Office Suite</option>
          <option>Antivirus</option>
          <option>Design Tools</option>
          <option>Others</option>
        </select>
        <textarea placeholder="Message" required className="w-full p-3 rounded border" />
        <button className="bg-blue-600 text-white px-6 py-3 rounded shadow">Submit</button>
        {submitted && (
          <p className="text-green-600 text-center animate-bounce">Form submitted! We'll get back to you shortly.</p>
        )}
      </form>
    </section>
  );
}
