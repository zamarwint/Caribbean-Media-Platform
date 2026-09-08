import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { ISLANDS_LIST } from "@/lib/data/mockData";
import { motion } from "motion/react";

interface ClaimHandleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClaimHandleModal: React.FC<ClaimHandleModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [handle, setHandle] = useState<string>("");
  const [selectedIsland, setSelectedIsland] = useState<string>("Jamaica");
  const [role, setRole] = useState<string>("Content Creator");
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const cleanHandle = handle.replace(/[^a-zA-Z0-9_]/g, "").toLowerCase();
  const isAvailable = cleanHandle.length >= 3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cleanHandle && email) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setHandle("");
    setEmail("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground backdrop-blur-xs animate-fadeIn">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        className="bg-background text-secondary-foreground rounded-lg max-w-lg w-full p-6 sm:p-8 relative shadow-xl border border-border overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-secondary-foreground hover:text-primary rounded-md hover:bg-muted transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-5">
              <span className="bg-background text-primary border border-secondary text-xs font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider inline-flex items-center space-x-1 mb-2">
                <Sparkles size={12} className="text-primary" />
                <span>Early Access Reservation</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                Reserve Your Custom <br />
                <span className="text-secondary-foreground">CMP @Handle</span>
              </h3>
              <p className="text-xs text-secondary-foreground mt-1 font-normal">
                Lock in your official handle before public launch across all 28+
                Caribbean islands.
              </p>
            </div>

            {/* Reservation Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Handle Input */}
              <div>
                <label className="block text-xs font-bold text-primary uppercase mb-1">
                  Desired Handle
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 font-bold text-secondary-foreground text-sm">
                    @
                  </span>
                  <input
                    type="text"
                    required
                    value={cleanHandle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="yourname_or_brand"
                    className="w-full pl-7 pr-24 py-2.5 bg-background border border-border rounded-md font-medium text-sm text-primary focus:outline-none focus:border-primary"
                  />
                  {isAvailable && (
                    <span className="absolute right-3 bg-muted text-primary border border-secondary text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center">
                      <CheckCircle2 size={10} className="mr-1 text-primary" />
                      Available
                    </span>
                  )}
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-xs font-bold text-primary uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full px-3 py-2.5 bg-background border border-border rounded-md font-medium text-sm text-primary focus:outline-none focus:border-primary"
                />
              </div>

              {/* Island Dropdown */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-primary uppercase mb-1">
                    Your Island
                  </label>
                  <select
                    value={selectedIsland}
                    onChange={(e) => setSelectedIsland(e.target.value)}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md font-medium text-xs text-primary focus:outline-none focus:border-primary"
                  >
                    {ISLANDS_LIST.filter((i) => i.code !== "ALL").map(
                      (island) => (
                        <option key={island.code} value={island.name}>
                          {island.flag} {island.name}
                        </option>
                      ),
                    )}
                  </select>
                </div>

                {/* Account Type */}
                <div>
                  <label className="block text-xs font-bold text-primary uppercase mb-1">
                    Profile Type
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md font-medium text-xs text-primary focus:outline-none focus:border-primary"
                  >
                    <option value="Content Creator">Content Creator</option>
                    <option value="Local Business">Local Business</option>
                    <option value="Musician / Artist">Musician / Artist</option>
                    <option value="Everyday User">Everyday User</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!cleanHandle || !email}
                className="w-full mt-2 bg-primary hover:bg-primary/90 text-background font-bold py-3 rounded-md transition-all shadow-xs flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 text-sm"
              >
                <span>Reserve @{cleanHandle || "handle"} Now</span>
                <ArrowRight size={15} />
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-5">
            <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center mx-auto mb-3 border border-secondary">
              <ShieldCheck size={26} />
            </div>
            <h3 className="text-2xl font-bold text-primary">
              Handle Reserved!
            </h3>
            <p className="text-lg font-bold text-secondary-foreground mt-1">
              @{cleanHandle}
            </p>
            <p className="text-xs text-secondary-foreground mt-2 max-w-xs mx-auto font-normal">
              We've locked in your handle for {selectedIsland}. Check{" "}
              <span className="font-bold text-primary">{email}</span> for your
              Creator Access Pass & VIP Beta Invite.
            </p>

            <button
              onClick={handleReset}
              className="mt-5 bg-primary text-background font-bold text-xs px-6 py-2.5 rounded-md hover:bg-primary/90 transition-all cursor-pointer"
            >
              Done & Return to Site
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
