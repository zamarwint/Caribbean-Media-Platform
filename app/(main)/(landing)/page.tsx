"use client";

import React, { useState } from "react";
import { Hero } from "./_components/Hero";
import { WhyCMP } from "./_components/WhyCMP";
import { AlgorithmSection } from "./_components/AlgorithmSection";
import { SocialProof } from "./_components/SocialProof";
import { FinalCTA } from "./_components/FinalCTA";
import { ClaimHandleModal } from "./_components/ClaimHandleModal";

export default function LandingPage() {
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);

  const handleOpenClaimModal = () => {
    setIsClaimModalOpen(true);
  };

  const handleCloseClaimModal = () => {
    setIsClaimModalOpen(false);
  };

  return (
    <div className="bg-background font-sans antialiased">
      {/* Main Content Sections */}
      <main>
        <Hero onOpenClaimModal={handleOpenClaimModal} />
        <WhyCMP />
        <AlgorithmSection />
        <SocialProof />
        <FinalCTA onOpenClaimModal={handleOpenClaimModal} />
      </main>

      {/* Interactive Handle Claim & Early Access Modal */}
      <ClaimHandleModal
        isOpen={isClaimModalOpen}
        onClose={handleCloseClaimModal}
      />
    </div>
  );
}
