import React, { useState } from "react";
import { QrCode, Sparkles, Download, CheckCircle2 } from "lucide-react";

interface FinalCTAProps {
  onOpenClaimModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenClaimModal }) => {
  const [showQRModal, setShowQRModal] = useState<boolean>(false);
  const [phoneNum, setPhoneNum] = useState<string>("");
  const [smsSent, setSmsSent] = useState<boolean>(false);

  const handleSMS = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNum) {
      setSmsSent(true);
      setTimeout(() => setSmsSent(false), 4000);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-background text-secondary-foreground border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto mb-10">
          <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider inline-block mb-3 border border-secondary">
            Join the Movement Today
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            Ready to Own Your <br />
            <span className="text-secondary-foreground">Caribbean Stage?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-secondary-foreground font-normal">
            Do not let your content or local business get buried in foreign
            algorithms. Claim your custom handle and download the CMP app today.
          </p>
        </div>

        {/* Buttons Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-12">
          <button
            onClick={onOpenClaimModal}
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-background font-bold text-sm py-3.5 px-8 rounded-md transition-all shadow-xs flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Sparkles size={16} className="text-secondary" />
            <span>Claim Your @Handle</span>
          </button>

          <button
            onClick={() => setShowQRModal(!showQRModal)}
            className="w-full sm:w-auto bg-background hover:bg-muted text-primary font-semibold text-sm py-3.5 px-7 rounded-md border border-border transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <QrCode size={16} className="text-secondary-foreground" />
            <span>Scan QR App Link</span>
          </button>
        </div>

        {/* App Store Badges */}
        <div className="pt-8 border-t border-border max-w-xl mx-auto">
          <p className="text-xs font-semibold text-secondary-foreground/70 uppercase tracking-wider mb-4">
            Available Soon for iOS, Android & Web
          </p>
          <div className="flex justify-center items-center space-x-3">
            <div className="bg-background border border-border px-4 py-2.5 rounded-md flex items-center space-x-3 text-left shadow-2xs">
              <Download size={18} className="text-primary" />
              <div>
                <p className="text-[10px] text-secondary-foreground uppercase font-medium">
                  Download on the
                </p>
                <p className="text-xs font-bold text-primary">App Store</p>
              </div>
            </div>

            <div className="bg-background border border-border px-4 py-2.5 rounded-md flex items-center space-x-3 text-left shadow-2xs">
              <Download size={18} className="text-primary" />
              <div>
                <p className="text-[10px] text-secondary-foreground uppercase font-medium">
                  GET IT ON
                </p>
                <p className="text-xs font-bold text-primary">Google Play</p>
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Drawer */}
        {showQRModal && (
          <div className="mt-8 bg-background p-6 rounded-lg border border-border shadow-sm max-w-md mx-auto text-center">
            <div className="w-28 h-28 bg-background p-2.5 rounded-md mx-auto mb-3 flex items-center justify-center border border-secondary">
              <QrCode size={80} className="text-primary" />
            </div>
            <p className="text-xs font-semibold text-secondary-foreground">
              Scan with your smartphone camera to pre-install CMP.
            </p>

            <form onSubmit={handleSMS} className="mt-4 flex space-x-2">
              <input
                type="tel"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
                placeholder="+1 (876) 000-0000"
                className="bg-background border border-border rounded-md px-3 py-2 text-xs font-medium text-primary flex-1 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="bg-primary text-background font-bold text-xs px-4 py-2 rounded-md cursor-pointer hover:bg-primary/90"
              >
                Text Link
              </button>
            </form>
            {smsSent && (
              <p className="text-xs text-primary font-semibold mt-2 flex items-center justify-center">
                <CheckCircle2 size={13} className="mr-1" />
                App link sent via SMS!
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
