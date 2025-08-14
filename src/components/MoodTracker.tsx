import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Zap, Moon, Sun } from "lucide-react";

const moods = [
  { id: 'excellent', emoji: '😊', label: 'Excellent', color: 'bg-wellness-energy', icon: Sun },
  { id: 'good', emoji: '🙂', label: 'Good', color: 'bg-secondary', icon: Zap },
  { id: 'okay', emoji: '😐', label: 'Okay', color: 'bg-primary-light', icon: Brain },
  { id: 'low', emoji: '😔', label: 'Low', color: 'bg-wellness-rest', icon: Heart },
  { id: 'difficult', emoji: '😞', label: 'Difficult', color: 'bg-muted', icon: Moon },
];

export const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [isTracked, setIsTracked] = useState(false);

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
  };

  const handleTrackMood = () => {
    if (selectedMood) {
      setIsTracked(true);
      // Here you would typically save to a database
      setTimeout(() => setIsTracked(false), 2000);
    }
  };

  return (
    <Card className="p-6 shadow-wellness bg-gradient-calm">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">How are you feeling today?</h2>
        <p className="text-muted-foreground">Track your daily mood to understand patterns and progress</p>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-6">
        {moods.map((mood) => {
          const IconComponent = mood.icon;
          return (
            <button
              key={mood.id}
              onClick={() => handleMoodSelect(mood.id)}
              className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                selectedMood === mood.id 
                  ? `${mood.color} shadow-wellness transform scale-105` 
                  : 'bg-background hover:bg-accent'
              }`}
            >
              <div className="text-3xl mb-2 animate-gentle-float">{mood.emoji}</div>
              <IconComponent className="w-4 h-4 mb-2 text-muted-foreground" />
              <span className="text-xs font-medium text-center">{mood.label}</span>
            </button>
          );
        })}
      </div>

      <div className="text-center">
        <Button 
          onClick={handleTrackMood}
          disabled={!selectedMood}
          className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-medium"
        >
          {isTracked ? '✓ Mood Tracked!' : 'Track My Mood'}
        </Button>
      </div>
    </Card>
  );
};