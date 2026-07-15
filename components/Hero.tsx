'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="overview" className="relative pt-20 pb-32 overflow-hidden bg-slate-50">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight"
                    >
                        Classic Elegance Meets <span className="text-orange-500">Modern Intelligence.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-6 text-lg md:text-xl text-slate-600"
                    >
                        Crafted with premium silver bezel styling, advanced chronograph tracking, and seamless smart connectivity.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4"
                    >
                        <button className="px-8 py-4 text-white bg-slate-900 rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
                            Order for $299
                        </button>
                        <button className="px-8 py-4 text-slate-900 bg-white border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-colors">
                            Watch Demo
                        </button>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[400px] sm:h-[500px] lg:h-[700px] flex items-center justify-center"
                >
                    <motion.div
                        animate={{ y: [-15, 15, -15] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="relative w-full max-w-[500px] aspect-square drop-shadow-2xl"
                    >
                        <Image
                            src="/SMW.webp"
                            alt="ChronoPulse Smartwatch"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
