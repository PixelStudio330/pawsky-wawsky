'use client';

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const journeyChapters = [
    {
      title: "The Whispering Woods",
      year: "2018",
      quote: "It started with six muddy hands and a dozen terrified eyes.",
      img: "/images/cat.png", // The heart-tugging rescue kitten
      content: "Pawsky Wawsky wasn't born in a boardroom. It began in a storm-battered barn where we found a litter of shivering kits. We weren't a 'team' then—just neighbors who refused to look away. That first kitten taught us that compassion is a call to action.",
      rotation: -2,
    },
    {
      title: "Building the Sanctuary",
      year: "2020",
      quote: "Every hammer blow was a promise of safety.",
      img: "/images/building.png", // The RASCC building 
      content: "Amidst global chaos, we found our clearing. We spent months hauling timber and healing hearts. The sanctuary isn't just wood and wire; it's a living promise that peace is possible for every soul that wanders into our woods.",
      rotation: 3,
    },
    {
      title: "The Family Grows",
      year: "2023",
      quote: "We are the invisible hands that calm the storm.",
      img: "/images/team.png", // Katseye Team
      content: "Today, our family includes artists, builders, and dreamers. We don't just feed animals; we compliment cats and watch ducks waddle. Every gem here is a part of our own soul, and every member of our team carries that love home.",
      rotation: -1,
    },
  ];

  // Animation variants
  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.4 }
    }
  };

  // Fixed the TypeScript 'ease' error by adding 'as const'
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#FDF6EC] text-[#5C6B64] pb-32 overflow-hidden selection:bg-[#E7C78A]/30">
      
      {/* 🎞️ Cinematic Film Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 🌿 Parallax Nature Elements */}
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -400]) }} className="absolute top-40 left-10 text-8xl opacity-10 select-none pointer-events-none">🍃</motion.div>
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 500]) }} className="absolute top-1/2 right-5 text-7xl opacity-10 select-none pointer-events-none">🐾</motion.div>

      {/* 🎬 Hero Section */}
      <section className="h-[75vh] flex flex-col items-center justify-center text-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <span className="bg-[#E7C78A] text-white px-6 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] mb-10 shadow-sm uppercase">
            A Pawsky Wawsky Original
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-[#6D7C75] leading-[0.85] mb-8 tracking-tighter">
            The Heart <br/> Behind <span className="text-[#E7C78A] italic">the Paw</span>
          </h1>
          <div className="h-1.5 w-24 bg-[#6D7C75]/10 rounded-full" />
        </motion.div>
      </section>

      {/* 🎞️ Documentary Path */}
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Visual "Thread" */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full border-l-2 border-dashed border-[#EAD7C3] -translate-x-1/2 z-0 hidden md:block opacity-50" />

        <div className="flex flex-col gap-64">
          {journeyChapters.map((chapter, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-20 z-10 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* 📸 Polaroid Frame */}
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -15, transition: { duration: 0.4 } }}
                className="w-full md:w-1/2"
              >
                <div 
                  className="bg-white p-6 shadow-[20px_20px_60px_rgba(109,124,117,0.1)] rounded-sm border border-[#EAD7C3] relative"
                  style={{ transform: `rotate(${chapter.rotation}deg)` }}
                >
                  {/* Washi Tape Effect */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-10 bg-[#FAF5E7]/80 -translate-y-6 rotate-2 shadow-sm border border-white/50" />
                  
                  {/* Fixed image cropping by removing fixed aspect ratio and using h-auto */}
                  <div className="overflow-hidden bg-[#FAF5E7] rounded-sm relative">
                    <Image
                      src={chapter.img}
                      alt={chapter.title}
                      width={800}
                      height={0} // Setting height to 0 and letting h-auto handle scaling
                      className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="pt-10 pb-4 text-center font-serif text-3xl text-[#8E9B94] italic">
                    {chapter.year}
                  </div>
                </div>
              </motion.div>

              {/* 📝 Narrative Text Container */}
              <motion.div 
                variants={textContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <div className="bg-white/40 backdrop-blur-md p-10 md:p-16 rounded-[4rem] rounded-tr-[10rem] border border-white shadow-sm relative min-h-fit">
                  {/* Floating Date Stamp */}
                  <motion.div 
                    variants={item}
                    className="absolute -top-6 left-12 bg-[#6D7C75] text-[#FDF6EC] px-8 py-2 rounded-2xl font-black shadow-xl -rotate-6 text-sm tracking-widest"
                  >
                    EST. {chapter.year}
                  </motion.div>
                  
                  <motion.h2 variants={item} className="text-5xl font-black text-[#6D7C75] mb-8 leading-tight tracking-tighter">
                    {chapter.title}
                  </motion.h2>
                  
                  <motion.div variants={item} className="mb-10 relative">
                    <span className="absolute -left-6 -top-4 text-8xl text-[#E7C78A] opacity-20 font-serif">“</span>
                    <p className="text-2xl font-medium italic text-[#8E9B94] leading-relaxed relative z-10">
                      {chapter.quote}
                    </p>
                  </motion.div>

                  <motion.p variants={item} className="text-[#5C6B64] leading-loose text-xl opacity-90">
                    {chapter.content}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* 🎬 Final Scene Call-to-Action */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-80 text-center px-6"
      >
        <div className="inline-block p-16 md:p-24 bg-[#6D7C75] text-[#FAF5E7] rounded-[6rem] shadow-2xl relative overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10"
          />
          
          <div className="relative z-10">
            <h3 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">The story is still <br/>being written...</h3>
            <p className="max-w-xl mx-auto opacity-80 text-xl mb-12 font-medium leading-relaxed">
              Every rescue, every purr, and every wag is a new sentence in our shared history.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#E7C78A] text-[#6D7C75] px-14 py-6 rounded-full font-black text-xl shadow-[0_20px_50px_rgba(231,199,138,0.3)] transition-all"
            >
              Pick Up the Pen 💌
            </motion.button>
          </div>
        </div>
      </motion.section>
    </main>
  );
}