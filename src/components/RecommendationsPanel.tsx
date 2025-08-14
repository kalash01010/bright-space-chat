import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Headphones, 
  BookOpen, 
  Activity, 
  Coffee, 
  Sunrise, 
  Wind,
  Heart,
  Leaf,
  Play,
  Clock
} from "lucide-react";

const recommendations = [
  {
    id: 1,
    title: "5-Minute Breathing Exercise",
    description: "Calm your mind with guided deep breathing",
    duration: "5 min",
    category: "Mindfulness",
    icon: Wind,
    color: "bg-wellness-calm"
  },
  {
    id: 2,
    title: "Morning Gratitude Journal",
    description: "Start your day with positive reflections",
    duration: "10 min",
    category: "Journaling",
    icon: Sunrise,
    color: "bg-wellness-energy"
  },
  {
    id: 3,
    title: "Gentle Yoga Flow",
    description: "Stretch and relax your body and mind",
    duration: "15 min",
    category: "Movement",
    icon: Activity,
    color: "bg-secondary-light"
  },
  {
    id: 4,
    title: "Calming Nature Sounds",
    description: "Listen to peaceful rain and forest sounds",
    duration: "20 min",
    category: "Audio",
    icon: Headphones,
    color: "bg-primary-light"
  },
  {
    id: 5,
    title: "Self-Care Tea Break",
    description: "Take a mindful moment with herbal tea",
    duration: "10 min",
    category: "Self-Care",
    icon: Coffee,
    color: "bg-wellness-rest"
  },
  {
    id: 6,
    title: "Positive Affirmations",
    description: "Boost confidence with daily affirmations",
    duration: "5 min",
    category: "Mindset",
    icon: Heart,
    color: "bg-wellness-focus"
  }
];

const quickActions = [
  { icon: Play, label: "Quick Meditation", color: "text-primary" },
  { icon: BookOpen, label: "Read Articles", color: "text-secondary" },
  { icon: Leaf, label: "Nature Walk", color: "text-wellness-calm" },
  { icon: Heart, label: "Self-Compassion", color: "text-wellness-energy" }
];

export const RecommendationsPanel = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6 shadow-soft bg-gradient-wellness">
        <h3 className="text-lg font-semibold mb-4 text-center">Personalized for You</h3>
        
        <div className="grid gap-4 mb-6">
          {recommendations.slice(0, 3).map((rec) => {
            const IconComponent = rec.icon;
            return (
              <div key={rec.id} className="bg-white rounded-lg p-4 hover:shadow-soft transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className={`p-2 ${rec.color} rounded-lg`}>
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{rec.title}</h4>
                    <p className="text-xs text-muted-foreground">{rec.description}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {rec.duration}
                    </Badge>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Button className="w-full bg-white text-primary hover:bg-primary hover:text-white">
          View All Recommendations
        </Button>
      </Card>

      <Card className="p-6 shadow-soft">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Button
                key={index}
                variant="outline"
                className="h-16 flex-col gap-2 hover:shadow-soft"
              >
                <IconComponent className={`w-5 h-5 ${action.color}`} />
                <span className="text-xs">{action.label}</span>
              </Button>
            );
          })}
        </div>
      </Card>

      <Card className="p-6 shadow-soft">
        <h3 className="text-lg font-semibold mb-4">Today's Focus</h3>
        
        <div className="bg-secondary-extra-light rounded-lg p-4 text-center">
          <Leaf className="w-8 h-8 text-secondary mx-auto mb-3 animate-gentle-float" />
          <h4 className="font-medium mb-2">Mindful Breathing</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Take 3 deep breaths whenever you feel overwhelmed today
          </p>
          <Button size="sm" className="bg-secondary hover:bg-secondary-light text-secondary-foreground">
            Start Now
          </Button>
        </div>
      </Card>
    </div>
  );
};