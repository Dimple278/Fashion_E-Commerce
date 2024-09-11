import React from "react";
import { HeroSection } from "./HeroSection";

const MissionCleanup: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col justify-center px-11 py-24 text-center max-md:px-5">
      <HeroSection
        title="We're on a Mission To Clean Up the Industry"
        description="Read about our progress in our latest Impact Report."
        buttonText="LEARN MORE"
        imageSrc="/mission.png"
      />
    </main>
  );
};

export default MissionCleanup;
