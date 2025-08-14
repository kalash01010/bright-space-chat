import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Calendar, 
  Target, 
  Award, 
  Smile, 
  Heart,
  Brain,
  Zap
} from "lucide-react";

const weeklyMoods = [
  { day: 'Mon', mood: 'good', emoji: '🙂' },
  { day: 'Tue', mood: 'excellent', emoji: '😊' },
  { day: 'Wed', mood: 'okay', emoji: '😐' },
  { day: 'Thu', mood: 'good', emoji: '🙂' },
  { day: 'Fri', mood: 'excellent', emoji: '😊' },
  { day: 'Sat', mood: 'good', emoji: '🙂' },
  { day: 'Sun', mood: 'excellent', emoji: '😊' },
];

const achievements = [
  { id: 1, title: "7-Day Streak", description: "Tracked mood for a week", icon: Target, earned: true },
  { id: 2, title: "Mindful Moments", description: "Completed 10 breathing exercises", icon: Brain, earned: true },
  { id: 3, title: "Community Helper", description: "Joined 3 support groups", icon: Heart, earned: false },
  { id: 4, title: "Wellness Champion", description: "30 days of consistent tracking", icon: Award, earned: false },
];

export const Dashboard = () => {
  const currentStreak = 7;
  const weeklyGoal = 7;
  const moodScore = 85;

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-wellness rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back! 👋</h2>
        <p className="text-white/90">
          You're doing great on your wellness journey. Here's your progress overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 shadow-soft">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary-extra-light rounded-lg">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Current Streak</h3>
              <p className="text-2xl font-bold text-primary">{currentStreak} days</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Keep it up! You're building a healthy habit.</p>
        </Card>

        <Card className="p-6 shadow-soft">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-secondary-extra-light rounded-lg">
              <Smile className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold">Mood Score</h3>
              <p className="text-2xl font-bold text-secondary">{moodScore}%</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Your average mood this week is great!</p>
        </Card>

        <Card className="p-6 shadow-soft">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-wellness-energy rounded-lg">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Weekly Goal</h3>
              <div className="flex items-center gap-2">
                <Progress value={(currentStreak / weeklyGoal) * 100} className="flex-1" />
                <span className="text-sm font-medium">{currentStreak}/{weeklyGoal}</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Goal completed! 🎉</p>
        </Card>
      </div>

      {/* Weekly Mood Tracker */}
      <Card className="p-6 shadow-soft">
        <h3 className="text-lg font-semibold mb-4">This Week's Moods</h3>
        <div className="grid grid-cols-7 gap-2">
          {weeklyMoods.map((day, index) => (
            <div key={day.day} className="text-center">
              <div className="text-xs text-muted-foreground mb-2">{day.day}</div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg mx-auto mb-1 ${
                day.mood === 'excellent' ? 'bg-wellness-energy' :
                day.mood === 'good' ? 'bg-secondary-light' :
                day.mood === 'okay' ? 'bg-primary-light' :
                'bg-muted'
              }`}>
                {day.emoji}
              </div>
              <div className="text-xs capitalize text-muted-foreground">{day.mood}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Achievements */}
      <Card className="p-6 shadow-soft">
        <h3 className="text-lg font-semibold mb-4">Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={achievement.id}
                className={`p-4 rounded-lg border transition-all ${
                  achievement.earned 
                    ? 'bg-gradient-calm border-secondary shadow-soft' 
                    : 'bg-muted border-border opacity-60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    achievement.earned ? 'bg-secondary' : 'bg-muted-foreground'
                  }`}>
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                  {achievement.earned && (
                    <Badge className="bg-secondary text-secondary-foreground">
                      Earned
                    </Badge>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};