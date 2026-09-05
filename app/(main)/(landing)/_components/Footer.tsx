import React from "react";
import { Globe } from "lucide-react";
import { Logo } from "../../_components/Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#5E3122] py-14 border-t border-[#5E3122]/10 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2.5 mb-3">
              <div className="size-12">
                <Logo />
              </div>
              <span className="text-lg font-extrabold text-[#1D4533] tracking-tight">
                Caribbean<span className="text-[#5E3122]">Media</span> Platform
              </span>
            </div>
            <p className="text-xs text-[#5E3122] leading-relaxed max-w-sm mb-4 font-normal">
              CMP is the dedicated, localized social media network empowering
              creators, everyday users, and businesses across 28+ island nations
              to connect, share culture, and grow.
            </p>
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#1D4533]">
              <Globe size={14} />
              <span>Headquartered in the Caribbean Basin</span>
            </div>
          </div>

          {/* Column 1: Platform */}
          <div>
            <h4 className="text-xs font-bold text-[#1D4533] uppercase tracking-wider mb-3">
              Platform
            </h4>
            <ul className="space-y-2 text-xs font-normal">
              <li>
                <a
                  href="#algorithm"
                  className="hover:text-[#1D4533] transition-colors"
                >
                  Island Discovery Engine
                </a>
              </li>
              <li>
                <a
                  href="#why-cmp"
                  className="hover:text-[#1D4533] transition-colors"
                >
                  28+ Island Nations
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="hover:text-[#1D4533] transition-colors"
                >
                  Trending Riddims
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="hover:text-[#1D4533] transition-colors"
                >
                  Verified Badges
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Community */}
          <div>
            <h4 className="text-xs font-bold text-[#1D4533] uppercase tracking-wider mb-3">
              Creators & Business
            </h4>
            <ul className="space-y-2 text-xs font-normal">
              <li>
                <a
                  href="#algorithm"
                  className="hover:text-[#1D4533] transition-colors"
                >
                  Creator Monetization
                </a>
              </li>
              <li>
                <a
                  href="#algorithm"
                  className="hover:text-[#1D4533] transition-colors"
                >
                  Local Storefronts
                </a>
              </li>
              <li>
                <a
                  href="#algorithm"
                  className="hover:text-[#1D4533] transition-colors"
                >
                  Virality Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1D4533] transition-colors">
                  Creator Fund
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Company */}
          <div>
            <h4 className="text-xs font-bold text-[#1D4533] uppercase tracking-wider mb-3">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs font-normal">
              <li>
                <a href="#" className="hover:text-[#1D4533] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1D4533] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1D4533] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1D4533] transition-colors">
                  Island Partners
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#5E3122]/10 flex flex-col sm:flex-row justify-between items-center text-xs text-[#5E3122]/70 gap-3">
          <p>© 2026 Caribbean Media Platform (CMP). All rights reserved.</p>
          <div className="flex items-center space-x-4 font-medium">
            <span>Made for the Caribbean & Diaspora</span>
            <span className="text-[#1D4533] font-bold">
              100% Island Powered
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
