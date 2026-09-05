import React, { useState } from 'react';
import { QrCode, Sparkles, Download, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenClaimModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenClaimModal }) => {
  const [showQRModal, setShowQRModal] = useState<boolean>(false);
  const [phoneNum, setPhoneNum] = useState<string>('');
  const [smsSent, setSmsSent] = useState<boolean>(false);

  const handleSMS = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNum) {
      setSmsSent(true);
      setTimeout(() => setSmsSent(false), 4000);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white text-[#5E3122] border-b border-[#5E3122]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="max-w-3xl mx-auto mb-10">
          <span className="bg-[#F7EAE0]/80 text-[#1D4533] text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider inline-block mb-3 border border-[#F9D2BA]">
            Join the Movement Today
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1D4533] tracking-tight leading-tight">
            Ready to Own Your <br />
            <span className="text-[#5E3122]">
              Caribbean Stage?
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E3122] font-normal">
            Do not let your content or local business get buried in foreign algorithms. Claim your custom handle and download the CMP app today.
          </p>
        </div>

        {/* Buttons Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-12">
          <button
            onClick={onOpenClaimModal}
            className="w-full sm:w-auto bg-[#1D4533] hover:bg-[#1D4533]/90 text-white font-bold text-sm py-3.5 px-8 rounded-md transition-all shadow-xs flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Sparkles size={16} className="text-[#F9D2BA]" />
            <span>Claim Your @Handle</span>
          </button>

          <button
            onClick={() => setShowQRModal(!showQRModal)}
            className="w-full sm:w-auto bg-white hover:bg-[#F7EAE0]/50 text-[#1D4533] font-semibold text-sm py-3.5 px-7 rounded-md border border-[#5E3122]/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <QrCode size={16} className="text-[#5E3122]" />
            <span>Scan QR App Link</span>
          </button>
        </div>

        {/* App Store Badges */}
        <div className="pt-8 border-t border-[#5E3122]/10 max-w-xl mx-auto">
          <p className="text-xs font-semibold text-[#5E3122]/70 uppercase tracking-wider mb-4">
            Available Soon for iOS, Android & Web
          </p>
          <div className="flex justify-center items-center space-x-3">
            <div className="bg-white border border-[#5E3122]/15 px-4 py-2.5 rounded-md flex items-center space-x-3 text-left shadow-2xs">
              <Download size={18} className="text-[#1D4533]" />
              <div>
                <p className="text-[10px] text-[#5E3122]/70 uppercase font-medium">Download on the</p>
                <p className="text-xs font-bold text-[#1D4533]">App Store</p>
              </div>
            </div>

            <div className="bg-white border border-[#5E3122]/15 px-4 py-2.5 rounded-md flex items-center space-x-3 text-left shadow-2xs">
              <Download size={18} className="text-[#1D4533]" />
              <div>
                <p className="text-[10px] text-[#5E3122]/70 uppercase font-medium">GET IT ON</p>
                <p className="text-xs font-bold text-[#1D4533]">Google Play</p>
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Drawer */}
        {showQRModal && (
          <div className="mt-8 bg-white p-6 rounded-lg border border-[#5E3122]/15 shadow-sm max-w-md mx-auto text-center">
            <div className="w-28 h-28 bg-[#F7EAE0] p-2.5 rounded-md mx-auto mb-3 flex items-center justify-center border border-[#F9D2BA]">
              <QrCode size={80} className="text-[#1D4533]" />
            </div>
            <p className="text-xs font-semibold text-[#5E3122]">Scan with your smartphone camera to pre-install CMP.</p>

            <form onSubmit={handleSMS} className="mt-4 flex space-x-2">
              <input
                type="tel"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
                placeholder="+1 (876) 000-0000"
                className="bg-white border border-[#5E3122]/20 rounded-md px-3 py-2 text-xs font-medium text-[#5E3122] flex-1 focus:outline-none focus:border-[#1D4533]"
              />
              <button
                type="submit"
                className="bg-[#1D4533] text-white font-bold text-xs px-4 py-2 rounded-md cursor-pointer hover:bg-[#1D4533]/90"
              >
                Text Link
              </button>
            </form>
            {smsSent && (
              <p className="text-xs text-[#1D4533] font-semibold mt-2 flex items-center justify-center">
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


