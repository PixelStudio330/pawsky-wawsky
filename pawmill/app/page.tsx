'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const pets = [
    { name: "Mochi 🐰", img: "/pets/bunny.jpg", desc: "Fluffy explorer of snack time." },
    { name: "Pippin 🐿️", img: "/pets/squirrel.jpg", desc: "Guardian of acorns & mischief." },
    { name: "Willow 🐕", img: "/pets/dog.jpg", desc: "Tail-wagging cuddle therapist." },
    { name: "Cloud 🐈", img: "/pets/cat.jpg", desc: "Purrfect nap buddy." },
    { name: "Eli 🦊", img: "/pets/fox.jpg", desc: "Sneaky snack hunter." },
    { name: "Upi Gupi 🦆", img: "/pets/duck.jpg", desc: "Quacky entertainer." },
    { name: "Whimsy 🐟", img: "/pets/fish.jpg", desc: "Bubble-blowing champion." },
  ];

  return (
    <main className="relative min-h-screen bg-[#FDF6EC] text-[#5C6B64] flex flex-col items-center px-6 py-12 overflow-hidden">
      
      {/* 🌸 Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Removed the annoying low-opacity paw from here! */}
        <div className="absolute bottom-20 right-10 text-4xl opacity-10 animate-pulse">🌿</div>
        <div className="absolute top-1/2 left-5 text-4xl opacity-10 animate-bounce delay-700">🦴</div>
        <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] bg-repeat opacity-5"></div>
      </div>

      {/* 🌿 Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-6xl font-extrabold text-[#6D7C75] drop-shadow-sm tracking-tight">
          Pawsky Wasky <span className="inline-block animate-bounce">🐾</span>
        </h1>
        <div className="h-1 w-24 bg-[#E7C78A] mx-auto mt-4 rounded-full" />
        <p className="text-xl text-[#8E9B94] mt-4 font-medium italic">
          Whiskers, Wings & Warm Hearts
        </p>
      </motion.header>

      {/* 🪵 Hero Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative max-w-5xl bg-[#EAD7C3] rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-10 z-10 border-4 border-white/50"
      >
        <div className="relative group">
            <Image
              src="/images/hero.jpg"
              alt="Adorable pets"
              width={450}
              height={350}
              className="rounded-2xl shadow-inner object-cover transition-transform duration-500 group-hover:rotate-2"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg text-2xl">✨</div>
        </div>

        <div className="flex flex-col items-start text-left max-w-md">
          <h2 className="text-3xl font-bold text-[#6D7C75] mb-4">
            Welcome to the Cozy Corner
          </h2>
          <p className="text-[#6D7C75]/80 text-lg leading-relaxed mb-8">
            Step into a world where every wag, chirp, and purr tells a story. From fuzzy rabbits to loyal hounds, we find forever homes for the soul.
          </p>
          <Link
            href="/our-gems"
            className="group relative px-8 py-4 bg-[#6D7C75] text-white rounded-full font-bold shadow-lg overflow-hidden transition-all hover:pr-12"
          >
            <span className="relative z-10">Meet Our Babies! 🐕</span>
            <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all">→</span>
            <div className="absolute inset-0 bg-[#E7C78A] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>
      </motion.section>

      {/* 🌸 Featured Pets Grid */}
      <section className="mt-32 w-full max-w-6xl relative z-10">
        <div className="flex flex-col items-center mb-12">
            <h3 className="text-4xl font-bold text-[#6D7C75]">Featured Friends</h3>
            <p className="text-[#A5A58D] mt-2">Hand-picked cuties looking for love</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pets.map((pet, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-sm rounded-[2.5rem] p-6 shadow-xl border border-white flex flex-col items-center text-center group"
            >
              <div className="relative w-full h-64 mb-6 overflow-hidden rounded-[2rem] border-4 border-[#FDF6EC]">
                <Image
                  src={pet.img}
                  alt={pet.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <h4 className="text-2xl font-bold text-[#6D7C75] group-hover:text-[#E7C78A] transition-colors">
                {pet.name}
              </h4>
              <p className="text-[#8E9B94] mt-2 mb-6 text-sm italic px-4">
                "{pet.desc}"
              </p>

              <Link
                href="/our-gems"
                className="w-full py-3 bg-[#FDF6EC] text-[#6D7C75] rounded-2xl font-bold border-2 border-transparent hover:border-[#E7C78A] hover:bg-white transition-all shadow-sm"
              >
                Know More 💖
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}