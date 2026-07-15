'use client';
import { motion } from 'framer-motion';
import { Clock, Activity, Droplets, Watch } from 'lucide-react';

const features = [
    {
        icon: Clock,
        title: "Precision Chronograph",
        description: "Classic chronograph UI & Moonphase display for timeless elegance."
    },
    {
        icon: Watch,
        title: "Premium Comfort",
        description: "All-white comfort silicone strap designed for all-day wearability."
    },
    {
        icon: Activity,
        title: "Health Metrics",
        description: "Multi-Subdial layouts for real-time fitness & health tracking."
    },
    {
        icon: Droplets,
        title: "Water Resistant",
        description: "Durable silver bezel chassis built to withstand the elements."
    }
];

export default function FeaturesGrid() {
    return (
        <section id="features" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Engineered for Excellence</h2>
                    <p className="mt-4 text-lg text-slate-600">Discover what sets the ChronoPulse White Edition apart from the competition.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 inline-flex items-center justify-center rounded-2xl bg-orange-50 text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative background element background */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-60"></div>
            </div>
        </section>
    );
}
