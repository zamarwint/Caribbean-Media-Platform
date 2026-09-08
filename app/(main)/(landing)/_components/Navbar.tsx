"use client";

import React, { useState } from "react";
import { Menu, X, Sparkles, ShieldCheck } from "lucide-react";
import { Logo } from "../../_components/Logo";
import { ThemeToggle } from "../../_components/ThemeToggle";
import Link from "next/link";

export const Navbar = ({}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/10 transition-all text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="size-12">
              <Logo />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-primary block leading-none">
                Caribbean
                <span className="text-secondary-foreground">Media</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-secondary-foreground/70 block mt-1">
                The Island Digital Stage
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#why-cmp"
              className="text-sm font-medium text-secondary-foreground hover:text-primary transition-colors"
            >
              Our Space
            </a>
            <a
              href="#algorithm"
              className="text-sm font-medium text-secondary-foreground hover:text-primary transition-colors"
            >
              The Algorithm
            </a>
            <a
              href="#audiences"
              className="text-sm font-medium text-secondary-foreground hover:text-primary transition-colors"
            >
              Creators & Business
            </a>
            <a
              href="#community"
              className="text-sm font-medium text-secondary-foreground hover:text-primary transition-colors"
            >
              Community Pulse
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <button className="bg-transparent hover:bg-secondary/50 text-secondary-foreground font-semibold text-xs px-4 py-2.5 rounded-md border border-secondary-foreground/20 transition-all flex items-center space-x-1.5 cursor-pointer">
              <ShieldCheck size={14} className="text-secondary-foreground" />
              <span>Reserve @Handle</span>
            </button>

            <button className="bg-primary hover:bg-primary/90 text-background font-semibold text-xs px-4.5 py-2.5 rounded-md transition-all shadow-xs flex items-center space-x-1.5 cursor-pointer">
              <Sparkles size={14} className="text-secondary" />
              <span>Start Creating</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-primary hover:text-secondary-foreground focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border/10 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#why-cmp"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-secondary-foreground hover:text-primary"
          >
            Our Space
          </a>
          <a
            href="#algorithm"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-secondary-foreground hover:text-primary"
          >
            The Algorithm
          </a>
          <a
            href="#audiences"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-secondary-foreground hover:text-primary"
          >
            Creators & Business
          </a>
          <a
            href="#community"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-secondary-foreground hover:text-primary"
          >
            Community Pulse
          </a>

          <div className="pt-3 flex flex-col space-y-2.5">
            <ThemeToggle />
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-primary text-background font-bold py-3 rounded-md text-center shadow-xs flex items-center justify-center space-x-2"
            >
              <Sparkles size={16} className="text-secondary" />
              <span>Start Creating Free</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-background text-secondary-foreground font-semibold py-2.5 rounded-md text-center border border-border/20 flex items-center justify-center space-x-2"
            >
              <ShieldCheck size={16} className="text-primary" />
              <span>Reserve My @Handle</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
