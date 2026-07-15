'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function SocialProof() {
    return (
        <section id="reviews" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white flex items-center justify-center"
                    >
                        <div className="relative w-full h-full p-8 md:p-16">
                            <Image
                                src="/OIP.webp"
                                alt="ChronoPulse on wrist"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        {/* Elegant overlay for premium feel */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 to-transparent pointer-events-none"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-8">Loved by Enthusiasts</h2>

                        <div className="space-y-6 mb-12">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group hover:shadow-md transition-shadow">
                                <div className="flex gap-1 mb-4 text-orange-500">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                                </div>
                                <p className="text-slate-600 italic mb-6 text-lg">"The perfect blend of a traditional watch and a modern smartwatch. The white silicone strap is incredibly comfortable, and the battery life actually lasts weeks, not days."</p>
                                <div className="font-bold text-slate-900">— Michael R., Watch Collector</div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group hover:shadow-md transition-shadow">
                                <div className="flex gap-1 mb-4 text-orange-500">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                                </div>
                                <p className="text-slate-600 italic mb-6 text-lg">"I've tried almost every premium smartwatch, but the ChronoPulse White Edition feels the most authentic. The chronograph face is absolutely stunning."</p>
                                <div className="font-bold text-slate-900">— Sarah L., Tech Reviewer</div>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                            <div>
                                <div className="text-2xl font-bold text-white mb-2">ChronoPulse White Edition</div>
                                <div className="text-slate-400 font-medium flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    In stock. Ships immediately.
                                </div>
                            </div>
                            <div>
                                <button className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/30 whitespace-nowrap text-lg">
                                    Pre-Order - $299
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
