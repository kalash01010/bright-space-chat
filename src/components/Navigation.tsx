import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Brain, 
  Users, 
  MessageCircle, 
  Calendar, 
  Settings,
  Menu,
  X,
  Heart
} from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'mood', label: 'Mood Tracker', icon: Heart },
  { id: 'ai-chat', label: 'AI Support', icon: Brain },
  { id: 'community', label: 'Community', icon: Users },
  { id: 'therapists', label: 'Therapists', icon: Calendar },
  { id: 'recommendations', label: 'For You', icon: MessageCircle },
];

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex bg-white shadow-soft border-r border-border">
        <div className="flex flex-col w-64 p-4">
          <div className="flex items-center gap-2 mb-8 p-2">
            <div className="p-2 bg-gradient-wellness rounded-xl">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MindSpace</h1>
              <p className="text-xs text-muted-foreground">Mental Wellness Companion</p>
            </div>
          </div>

          <div className="space-y-2 flex-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className={`w-full justify-start gap-3 ${
                    activeSection === item.id 
                      ? 'bg-primary text-primary-foreground shadow-soft' 
                      : 'hover:bg-accent'
                  }`}
                  onClick={() => onSectionChange(item.id)}
                >
                  <IconComponent className="w-4 h-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>

          <div className="border-t border-border pt-4 mt-4">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Settings className="w-4 h-4" />
              Settings
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="bg-white shadow-soft border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-wellness rounded-lg">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg font-bold">MindSpace</h1>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="bg-white shadow-wellness border-b border-border">
            <div className="p-4 space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "default" : "ghost"}
                    className={`w-full justify-start gap-3 ${
                      activeSection === item.id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-accent'
                    }`}
                    onClick={() => {
                      onSectionChange(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <IconComponent className="w-4 h-4" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};