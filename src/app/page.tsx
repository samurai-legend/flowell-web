import BrandSection from "@app/components/BrandSection";
import CalendarSection from "@app/components/CalendarSection";
import CoachingToolkitSection from "@app/components/CoachingToolKitSection";
import CommunitySection from "@app/components/CommunitySection";
import LandingSection from "@app/components/LandingSection";
import TeamSection from "@app/components/TeamSection";
import TestimonialSection from "@app/components/TestimonialSection";
import WhatIsFlowellSection from "@app/components/WhatIsFlowellSection";
import WhatYouGetSection from "@app/components/WhatYouGetSection";
import data from "@app/data/landingPage.json";

export default function Home() {
  return (
    <main>
      <LandingSection
        title={data.landingSection.title}
        description={data.landingSection.description}
        videoUrl={data.landingSection.videoUrl}
        facts={data.landingSection.facts}
      />
      <BrandSection title={data.brandsSection.title} />
      <WhatIsFlowellSection
        title={data.whatIsFlowellSection.title}
        description={data.whatIsFlowellSection.description}
        bannerDetails={data.whatIsFlowellSection.bannerDetails}
        cta={data.whatIsFlowellSection.cta}
      />
      <CoachingToolkitSection
        title={data.coachingToolKitSection.title}
        description={data.coachingToolKitSection.description}
        imageUrl={data.coachingToolKitSection.imageUrl}
        type={data.coachingToolKitSection.type}
      />
      <CommunitySection
        title={data.communitiySection.title}
        description={data.communitiySection.description}
        imageUrl={data.communitiySection.imageUrl}
        type={data.communitiySection.type}
      />
      <WhatYouGetSection
        title={data.whatYouGetSection.title}
        description={data.whatYouGetSection.description}
        benefits={data.whatYouGetSection.benefits}
        downloadEbook={data.whatYouGetSection.downloadEbook}
      />
      <TeamSection
        title={data.teamSection.title}
        members={data.teamSection.members}
      />
      <TestimonialSection
        title={data.testimonialSection.title}
        desription={data.testimonialSection.description}
        videos={data.testimonialSection.videos}
      />
      <CalendarSection />
    </main>
  );
}
