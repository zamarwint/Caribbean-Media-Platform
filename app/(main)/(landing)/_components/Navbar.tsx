"use client";

import React, { useState } from "react";
import { Menu, X, Sparkles, ShieldCheck, Parasol } from "lucide-react";
import { Logo } from "../../_components/Logo";

export const Navbar = ({}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#5E3122]/10 transition-all text-[#1D4533]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="size-12">
              <Logo />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#1D4533] block leading-none">
                Caribbean<span className="text-[#5E3122]">Media</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#5E3122]/70 block mt-1">
                The Island Digital Stage
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#why-cmp"
              className="text-sm font-medium text-[#5E3122] hover:text-[#1D4533] transition-colors"
            >
              Our Space
            </a>
            <a
              href="#algorithm"
              className="text-sm font-medium text-[#5E3122] hover:text-[#1D4533] transition-colors"
            >
              The Algorithm
            </a>
            <a
              href="#audiences"
              className="text-sm font-medium text-[#5E3122] hover:text-[#1D4533] transition-colors"
            >
              Creators & Business
            </a>
            <a
              href="#community"
              className="text-sm font-medium text-[#5E3122] hover:text-[#1D4533] transition-colors"
            >
              Community Pulse
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="bg-transparent hover:bg-[#F7EAE0]/50 text-[#5E3122] font-semibold text-xs px-4 py-2.5 rounded-md border border-[#5E3122]/20 transition-all flex items-center space-x-1.5 cursor-pointer">
              <ShieldCheck size={14} className="text-[#1D4533]" />
              <span>Reserve @Handle</span>
            </button>

            <button className="bg-[#1D4533] hover:bg-[#1D4533]/90 text-white font-semibold text-xs px-4.5 py-2.5 rounded-md transition-all shadow-xs flex items-center space-x-1.5 cursor-pointer">
              <Sparkles size={14} className="text-[#F9D2BA]" />
              <span>Start Creating</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#1D4533] hover:text-[#5E3122] focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#5E3122]/10 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#why-cmp"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-[#5E3122] hover:text-[#1D4533]"
          >
            Our Space
          </a>
          <a
            href="#algorithm"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-[#5E3122] hover:text-[#1D4533]"
          >
            The Algorithm
          </a>
          <a
            href="#audiences"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-[#5E3122] hover:text-[#1D4533]"
          >
            Creators & Business
          </a>
          <a
            href="#community"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-[#5E3122] hover:text-[#1D4533]"
          >
            Community Pulse
          </a>

          <div className="pt-3 flex flex-col space-y-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-[#1D4533] text-white font-bold py-3 rounded-md text-center shadow-xs flex items-center justify-center space-x-2"
            >
              <Sparkles size={16} className="text-[#F9D2BA]" />
              <span>Start Creating Free</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-white text-[#5E3122] font-semibold py-2.5 rounded-md text-center border border-[#5E3122]/20 flex items-center justify-center space-x-2"
            >
              <ShieldCheck size={16} className="text-[#1D4533]" />
              <span>Reserve My @Handle</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
