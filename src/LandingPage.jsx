import { motion } from "framer-motion";
import { useEffect } from "react";
import NebulaBackground from "./NebulaBackground";

export default function LandingPage() {
  useEffect(() => {
    document.body.style.background = "#000";
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <div className="font-sans leading-relaxed text-white relative overflow-hidden">{/* Navigation */}
<nav className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center px-6 py-4 bg-black/50 backdrop-blur-md text-white shadow-md">
  <div className="text-lg font-bold">Your logo here</div>
  <div className="relative group">
    <button className="text-sm md:text-base font-medium px-4 py-2 rounded hover:bg-white hover:text-black transition">
      Menu
    </button>
    <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
      <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sample Page 1</a>
      <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sample Page 2</a>
    </div>
  </div>
</nav>
      {/* Moving abstract space background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://www.videvo.net/videvo_files/converted/2016_08/preview/160721_A_07_SpaceNebula_1080p.mp447801.webm" type="video/webm" />
          <source src="https://www.videvo.net/videvo_files/converted/2016_08/preview/160721_A_07_SpaceNebula_1080p.mp447801.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Hero */}
      <header className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-4"
        >
          Want a site like this? 🚀
        </motion.h1>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition"
        >
          Contact Us
        </motion.a>
      </header>

      {/* Services */}
      <section id="services" className="relative z-10 py-20 px-4 md:px-12 bg-black bg-opacity-80">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-8 bg-white bg-opacity-10 rounded-2xl shadow-md backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2">Brand Strategy</h3>
            <p className="text-sm">Crafting distinct positioning and messaging that resonates.</p>
          </div>
          <div className="p-8 bg-white bg-opacity-10 rounded-2xl shadow-md backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2">Content &amp; Social</h3>
            <p className="text-sm">Scroll-stopping creative calibrated for every platform.</p>
          </div>
          <div className="p-8 bg-white bg-opacity-10 rounded-2xl shadow-md backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2">Performance Media</h3>
            <p className="text-sm">ROI-driven paid campaigns powered by real-time analytics.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 py-20 px-4 md:px-12 bg-black bg-opacity-80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Who We Are</h2>
          <p className="text-lg">
            Founded by creatives with 10+ years in hospitality &amp; live events, we merge storytelling with growth
            science to deliver marketing that moves the needle.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 py-20 px-4 md:px-12 bg-black bg-opacity-80">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Let’s Talk</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="max-w-2xl mx-auto grid gap-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="How can we help?"
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
          <button
            type="submit"
            className="px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-teal-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="relative z-10 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Sebby Media. All rights reserved.
      </footer>
    </div>
  );
}
