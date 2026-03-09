'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurGems() {
  const pets = [
    {
      name: "Mochi 🐰",
      img: "/pets/bunny.jpg",
      age: "2 years",
      favFood: "Carrot cupcakes 🥕🧁",
      personality: "Playful, shy around strangers but LOVES cuddles.",
      do: "Let them hop freely in safe spaces.",
      avoid: "Loud noises and sudden movements scare them!",
    },
    {
      name: "Pippin 🐿️",
      img: "/pets/squirrel.jpg",
      age: "1.5 years",
      favFood: "Roasted almonds 🌰",
      personality: "Mischievous little thief with a golden heart.",
      do: "Offer nuts and watch him do tricks!",
      avoid: "Leaving shiny jewelry unattended 😭",
    },
    {
      name: "Willow 🐕",
      img: "/pets/dog.jpg",
      age: "3 years",
      favFood: "Grilled chicken 🍗",
      personality: "Therapy-level affectionate, always protective.",
      do: "Daily walks and belly rubs!",
      avoid: "Skipping playtime — she’ll guilt-trip you.",
    },
    {
      name: "Cloud 🐈",
      img: "/pets/cat.jpg",
      age: "4 years",
      favFood: "Tuna flakes 🐟",
      personality: "Elegant, dramatic, thinks she’s royalty.",
      do: "Compliment her at least once a day.",
      avoid: "Disturbing nap time unless you want chaos.",
    },
    {
      name: "Eli 🦊",
      img: "/pets/fox.jpg",
      age: "2.5 years",
      favFood: "Blueberries & honey 🍯🫐",
      personality: "Sneaky but fiercely loyal once he trusts you.",
      do: "Gentle approach and playtime in open fields.",
      avoid: "Too much direct eye contact — intimidates him.",
    },
    {
      name: "Upi Gupi 🦆",
      img: "/pets/duck.jpg",
      age: "1 year",
      favFood: "Bread crumbs & lettuce 🥬",
      personality: "Comedian. Loud. Unapologetically fabulous.",
      do: "Let them waddle near ponds.",
      avoid: "Splashing too close — diva behavior incoming.",
    },
    {
      name: "Whimsy 🐟",
      img: "/pets/fish.jpg",
      age: "6 months",
      favFood: "Frozen bloodworms 🐛❄️",
      personality: "The zen master of the tank. Loves watching humans.",
      do: "Keep the water crystal clear and bubbly.",
      avoid: "Tapping on the glass—it ruins the vibes.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#FDF6EC] text-[#5C6B64] py-20 px-6 overflow-hidden">
      
      {/* 🌸 Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-20 right-10 text-6xl opacity-10 rotate-12">💎</div>
        <div className="absolute bottom-40 left-10 text-6xl opacity-10 -rotate-12">🐾</div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E7C78A]/5 rounded-full blur-3xl" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20 relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#6D7C75] drop-shadow-sm">
          Our Precious Gems 💎
        </h1>
        <p className="text-[#8E9B94] mt-4 text-xl italic font-medium">
          Meet the souls that make our sanctuary a home.
        </p>
        <div className="h-1.5 w-32 bg-[#E7C78A] mx-auto mt-6 rounded-full" />
      </motion.div>

      <div className="flex flex-col gap-28 max-w-7xl mx-auto relative z-10 px-4">
        {pets.map((pet, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl flex flex-col lg:flex-row items-center gap-14 border-4 border-white/50 relative"
          >
            {/* 📸 Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-5 bg-[#C9A68D] rounded-[3.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl border-8 border-white">
                <Image
                  src={pet.img}
                  alt={pet.name}
                  width={650}
                  height={550}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white w-24 h-24 rounded-full shadow-2xl flex items-center justify-center text-4xl animate-pulse">
                ✨
              </div>
            </div>

            {/* 📝 Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <h2 className="text-5xl font-extrabold text-[#6D7C75] mb-8 flex items-center gap-5 tracking-tight">
                {pet.name}
                <span className="text-sm font-semibold px-5 py-2 bg-[#E7C78A]/30 text-[#6D7C75] rounded-full">
                  {pet.age} old
                </span>
              </h2>
              
              <div className="space-y-8 text-lg">
                <p className="text-[#8E9B94] leading-relaxed">
                  <span className="font-bold text-[#6D7C75]">Personality:</span> {pet.personality}
                </p>
                
                <div className="bg-[#FAF5E7] p-5 rounded-2xl border-l-4 border-[#E7C78A] inline-block shadow-inner">
                  <p className="text-[#6D7C75]">
                    <span className="font-bold">Favorite Treat:</span> {pet.favFood}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                  <div className="bg-[#EDFDF3] p-7 rounded-3xl shadow-sm border border-[#C5ECD9]">
                    <h4 className="font-bold text-green-800 mb-3 text-lg underline decoration-green-200 underline-offset-4">Do 🌿</h4>
                    <p className="text-sm text-[#465A51] leading-relaxed">{pet.do}</p>
                  </div>
                  <div className="bg-[#FFF6F6] p-7 rounded-3xl shadow-sm border border-[#FFD9D9]">
                    <h4 className="font-bold text-red-800 mb-3 text-lg underline decoration-red-200 underline-offset-4">Avoid 🚫</h4>
                    <p className="text-sm text-[#664F4F] leading-relaxed">{pet.avoid}</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 px-10 py-4 bg-[#6D7C75] text-white rounded-full font-bold shadow-xl self-start hover:bg-[#E7C78A] hover:text-[#6D7C75] transition-all duration-300"
              >
                Inquire about {pet.name.split(' ')[0]} 💌
              </motion.button>
            </div>
          </motion.section>
        ))}
      </div>

      <footer className="mt-32 text-center text-[#8E9B94]">
        <p className="text-sm italic font-medium">Every gem deserves a crown. Every pet deserves a home. ✨</p>
      </footer>
    </main>
  );
}