'use client';
import { motion } from 'framer-motion';

const specs = [
    { label: "Display", value: "High-definition AMOLED with classic chronograph dial aesthetic" },
    { label: "Battery Life", value: "Up to 14 Days on standard mode" },
    { label: "Sensors", value: "Heart Rate, SpO2, Sleep Tracking, GPS" },
    { label: "Materials", value: "Stainless Steel Bezel + High-Grade Silicone Strap" },
    { label: "Connectivity", value: "Bluetooth 5.3, Seamless iOS & Android Sync" },
    { label: "Water Rating", value: "5 ATM (50 meters)" }
];

export default function SpecsSection() {
    return (
        <section id="specs" className="py-24 bg-slate-900 text-white relative">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Uncompromising Specifications</h2>
                        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                            Every detail of the ChronoPulse White Edition has been meticulously crafted to blend standard-setting performance with luxury aesthetics.
                        </p>

                        <div className="space-y-6">
                            {specs.map((spec, idx) => (
                                <div key={idx} className="border-b border-slate-800 pb-4">
                                    <dt className="text-sm font-medium text-orange-500 mb-1">{spec.label}</dt>
                                    <dd className="text-lg md:text-xl font-semibold">{spec.value}</dd>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl flex items-center justify-center p-8"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 opacity-50"></div>

                        <div className="relative z-10 w-full max-w-sm aspect-square border-4 border-dashed border-slate-600 rounded-full flex flex-col items-center justify-center group hover:border-slate-500 transition-colors cursor-default">
                            <div className="text-center group-hover:scale-110 transition-transform duration-500">
                                <div className="text-5xl font-bold text-slate-300 mb-2">44mm</div>
                                <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Case Size</div>
                            </div>

                            <div className="absolute w-full h-full border border-orange-500/20 rounded-full scale-110 animate-[spin_60s_linear_infinite]"></div>
                            <div className="absolute w-full h-full border border-slate-600/30 rounded-full scale-125 animate-[spin_40s_linear_infinite_reverse]"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
