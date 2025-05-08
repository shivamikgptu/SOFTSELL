import { useState } from "react";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import ChatWidget from "./components/ChatWidget";
import { Helmet } from "react-helmet";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Helmet>
        <title>SoftSell - Sell Unused Software Licenses</title>
        <meta name="description" content="SoftSell helps businesses sell unused software licenses fast and easily." />
       
      </Helmet>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
        <header className="flex justify-between items-center p-6">
          <div className="flex items-center gap-2">
           
            <h1 className="text-xl font-bold">SoftSell</h1>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-700 p-2 rounded"
          >Toggle Mode</button>
        </header>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <ChatWidget />
      </div>
    </div>
  );
}
