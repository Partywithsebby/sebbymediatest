
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="font-sans leading-relaxed text-gray-900">
      <header className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black to-teal-700 text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 text-center"
        >
          Sebby Media
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl text-center"
        >
          We amplify your brand’s voice with data-driven strategy and striking creative so you can focus on growth.
        </motion.p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition"
        >
          Get a Free Audit
        </motion.a>
      </header>

      <section id="services" className="py-20 px-4 md:px-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-8 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Brand Strategy</h3>
            <p className="text-sm">Crafting distinct positioning and messaging that resonates.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Content &amp; Social</h3>
            <p className="text-sm">Scroll-stopping creative calibrated for every platform.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Performance Media</h3>
            <p className="text-sm">ROI-driven paid campaigns powered by real-time analytics.</p>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Who We Are</h2>
          <p className="text-lg">
            Founded by creatives with 10+ years in hospitality &amp; live events, we merge storytelling with growth
            science to deliver marketing that moves the needle.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 md:px-12 bg-gray-50">
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
            className="px-8 py-4 bg-black text-white font-semibold rounded-full shadow-lg hover:bg-teal-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sebby Media. All rights reserved.
      </footer>
    </div>
  );
}
