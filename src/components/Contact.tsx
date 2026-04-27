"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Loader2, Send } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get In Touch</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/3 space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Let's Connect</h3>
            <p className="text-gray-600">
              I'm always open to discussing AI architecture, scalable NLP systems, or potential collaborations.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="#" className="p-4 rounded-2xl bg-[#E8EDF2] neo-shadow hover:neo-shadow-hover transition-all text-gray-600 hover:text-primary">
              <Github size={24} />
            </a>
            <a href="#" className="p-4 rounded-2xl bg-[#E8EDF2] neo-shadow hover:neo-shadow-hover transition-all text-gray-600 hover:text-[#0077b5]">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-4 rounded-2xl bg-[#E8EDF2] neo-shadow hover:neo-shadow-hover transition-all text-gray-600 hover:text-[#ea4335]">
              <Mail size={24} />
            </a>
            <a href="#" className="p-4 rounded-2xl bg-[#E8EDF2] neo-shadow hover:neo-shadow-hover transition-all text-gray-600 hover:text-[#1da1f2]">
              <Twitter size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-2/3 glass-panel p-8 md:p-10 rounded-3xl neo-shadow relative"
        >
          <form onSubmit={handleSubmit} className="space-y-6 z-10 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-4 rounded-2xl bg-[#E8EDF2] neo-shadow-inset border-none focus:ring-2 focus:ring-primary/50 outline-none text-gray-700 transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-4 rounded-2xl bg-[#E8EDF2] neo-shadow-inset border-none focus:ring-2 focus:ring-primary/50 outline-none text-gray-700 transition-shadow"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-2">Subject</label>
              <input
                type="text"
                required
                className="w-full p-4 rounded-2xl bg-[#E8EDF2] neo-shadow-inset border-none focus:ring-2 focus:ring-primary/50 outline-none text-gray-700 transition-shadow"
                placeholder="Collaboration Opportunity"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-2">Message</label>
              <textarea
                required
                rows={4}
                className="w-full p-4 rounded-2xl bg-[#E8EDF2] neo-shadow-inset border-none focus:ring-2 focus:ring-primary/50 outline-none text-gray-700 transition-shadow resize-none"
                placeholder="How can we work together?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full py-4 rounded-2xl font-semibold text-white bg-primary shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" size={20} />
              ) : isSubmitted ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
