import Link from 'next/link';
import { Globe, Mail, MessageSquare, Share2 } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                                ChronoPulse
                            </span>
                        </Link>
                        <p className="text-slate-500 text-base mb-8 leading-relaxed max-w-sm">
                            Elevating the standard of luxury smart wearables. Merging timeless craftsmanship with next-generation technology for the modern professional.
                        </p>
                        <div className="flex gap-5 text-slate-400">
                            <a href="#" className="hover:text-orange-500 transition-colors p-2 bg-slate-50 rounded-full"><Share2 className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-orange-500 transition-colors p-2 bg-slate-50 rounded-full"><MessageSquare className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-orange-500 transition-colors p-2 bg-slate-50 rounded-full"><Globe className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-orange-500 transition-colors p-2 bg-slate-50 rounded-full"><Mail className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Product</h4>
                        <ul className="space-y-4 text-base text-slate-500 font-medium">
                            <li><Link href="#overview" className="hover:text-orange-500 transition-colors">Overview</Link></li>
                            <li><Link href="#features" className="hover:text-orange-500 transition-colors">Features</Link></li>
                            <li><Link href="#specs" className="hover:text-orange-500 transition-colors">Specifications</Link></li>
                            <li><Link href="#reviews" className="hover:text-orange-500 transition-colors">Reviews</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Support</h4>
                        <ul className="space-y-4 text-base text-slate-500 font-medium">
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Warranty Policy</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Shipping Info</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Legal</h4>
                        <ul className="space-y-4 text-base text-slate-500 font-medium">
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Return Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-slate-400 font-medium">
                        &copy; {new Date().getFullYear()} ChronoPulse Wearables Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-400 font-medium">
                        <button className="hover:text-slate-900 transition-colors">English (US)</button>
                        <button className="hover:text-slate-900 transition-colors">$ USD</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
