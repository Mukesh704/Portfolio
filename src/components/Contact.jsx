import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        "service_jhla63q",
        "template_pck6rxy",
        form.current,
        "NJ2ejumbUxpoy-Apb"
      )
      .then(() => {
        setStatusMessage("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        setStatusMessage("❌ Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#201e23" }}
    >
      <div
        className="w-full max-w-2xl p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10  duration-300 hover:scale-[1.02] hover:shadow-[#c27aff] transition-shadow"
        style={{
          background:
            "linear-gradient(135deg, rgba(42,37,47,0.95) 0%, rgba(32,30,35,0.95) 100%)",
        }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-white tracking-wide">
          Contact
        </h2>
        <p className="text-gray-300 text-center mb-8 max-w-md mx-auto">
          Have a question, a project idea, or just want to say hello?  
          Fill out the form below and I’ll get back to you as soon as possible.
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5"
          noValidate
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            disabled={sending}
            className="bg-transparent text-white placeholder-gray-400 rounded-lg px-4 py-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            disabled={sending}
            className="bg-transparent text-white placeholder-gray-400 rounded-lg px-4 py-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            disabled={sending}
            className="bg-transparent text-white placeholder-gray-400 rounded-lg px-4 py-3 border border-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <button
            type="submit"
            disabled={sending}
            className="py-3 rounded-lg bg-gradient-to-r from-purple-800 to-purple-400 hover:from-purple-400 hover:to-purple-800 shadow-lg text-white font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>

        {statusMessage && (
          <p className="mt-6 text-center text-sm text-gray-300 animate-fade-in">
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;