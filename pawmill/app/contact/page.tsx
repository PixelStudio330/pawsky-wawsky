'use client';

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending your message to the woods...");

    const formData = new FormData(event.currentTarget);
    
    // This pulls from your .env.local file
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      setResult("Error: API Key missing. Check your .env file!");
      setIsSubmitting(false);
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message received! A carrier pigeon will get back to you soon. 🕊️");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("Something went wrong. Please try again!");
      }
    } catch (error) {
      setResult("Network error. Check your connection!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-[#FDF6EC] text-[#5C6B64] py-24 px-6 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <span className="bg-[#E7C78A] text-white px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
            Get in Touch
          </span>
          <h1 className="text-6xl md:text-7xl font-black text-[#6D7C75] leading-[0.9] tracking-tighter">
            Send us a <br/> <span className="text-[#E7C78A] italic font-serif">Love Note.</span>
          </h1>
          <p className="text-xl text-[#8E9B94] leading-relaxed max-w-md">
            The sanctuary is always open for those with kind hearts. Tell us your story!
          </p>
        </motion.div>

        {/* Form Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-white shadow-2xl rounded-[3rem] rotate-2 scale-105 opacity-50" />
          
          <form 
            onSubmit={onSubmit}
            className="relative bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border border-[#EAD7C3] flex flex-col gap-6"
          >
            {/* 🤖 Anti-Spam Honeypot (Hidden from users) */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-[#E7C78A] ml-2">Name</label>
              <input type="text" name="name" required placeholder="Your Name" className="w-full bg-[#FAF5E7] border-2 border-transparent focus:border-[#E7C78A] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-[#E7C78A] ml-2">Email</label>
              <input type="email" name="email" required placeholder="your@email.com" className="w-full bg-[#FAF5E7] border-2 border-transparent focus:border-[#E7C78A] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-[#E7C78A] ml-2">Message</label>
              <textarea name="message" required rows={4} placeholder="What's on your mind?" className="w-full bg-[#FAF5E7] border-2 border-transparent focus:border-[#E7C78A] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all resize-none" />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className={`w-full py-5 rounded-2xl font-black text-white shadow-lg transition-all ${isSubmitting ? "bg-[#8E9B94]" : "bg-[#6D7C75]"}`}
            >
              {isSubmitting ? "Sending..." : "Send Note 💌"}
            </motion.button>

            {result && <p className="text-center text-sm font-bold text-[#6D7C75] mt-4">{result}</p>}
          </form>
        </motion.div>
      </div>
    </main>
  );
}