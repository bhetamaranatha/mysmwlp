'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navLinks = ['Overview', 'Features', 'Specs', 'Reviews'];

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-200">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold tracking-tight text-slate-900">
                        ChronoPulse
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((item) => (
                        <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                            {item}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center space-x-4">
                    <button className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors">
                        Pre-Order Now
                    </button>
                    <button
                        className="md:hidden p-2 text-slate-600"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-200 absolute top-16 left-0 w-full shadow-lg">
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        {navLinks.map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors px-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <button className="w-full mt-4 flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors">
                            Pre-Order Now
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
