import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Dashboard } from "@/components/Dashboard";
import { MoodTracker } from "@/components/MoodTracker";
import { AIChat } from "@/components/AIChat";
import { CommunitySection } from "@/components/CommunitySection";
import { TherapistConnection } from "@/components/TherapistConnection";
import { RecommendationsPanel } from "@/components/RecommendationsPanel";

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'mood':
        return (
          <div className="space-y-6">
            <MoodTracker />
            <RecommendationsPanel />
          </div>
        );
      case 'ai-chat':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AIChat />
            <RecommendationsPanel />
          </div>
        );
      case 'community':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <CommunitySection />
            </div>
            <RecommendationsPanel />
          </div>
        );
      case 'therapists':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TherapistConnection />
            <RecommendationsPanel />
          </div>
        );
      case 'recommendations':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecommendationsPanel />
            <div className="space-y-6">
              <MoodTracker />
              <AIChat />
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Navigation 
          activeSection={activeSection} 
          onSectionChange={setActiveSection}
        />
        
        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-7xl mx-auto animate-fade-in">
            {renderActiveSection()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
