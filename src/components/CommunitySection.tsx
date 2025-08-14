import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Globe, Video, MessageCircle, Heart, Star } from "lucide-react";

const communityGroups = [
  {
    id: 1,
    name: "Anxiety Support Circle",
    members: 234,
    online: 12,
    type: "Support Group",
    location: "Global"
  },
  {
    id: 2,
    name: "Mindfulness Together",
    members: 156,
    online: 8,
    type: "Meditation",
    location: "Worldwide"
  },
  {
    id: 3,
    name: "Depression Warriors",
    members: 189,
    online: 15,
    type: "Peer Support",
    location: "International"
  }
];

const activeChats = [
  {
    id: 1,
    title: "Daily Check-in",
    participants: 6,
    lastMessage: "How is everyone feeling today?",
    time: "2 min ago"
  },
  {
    id: 2,
    title: "Evening Reflection",
    participants: 4,
    lastMessage: "Grateful for small wins today ✨",
    time: "5 min ago"
  }
];

export const CommunitySection = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6 shadow-soft">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Global Community</h3>
          <Badge variant="secondary" className="ml-auto">
            <Users className="w-3 h-3 mr-1" />
            579 Online
          </Badge>
        </div>

        <div className="grid gap-4 mb-4">
          {communityGroups.map((group) => (
            <div key={group.id} className="p-4 bg-accent rounded-lg border hover:shadow-soft transition-all">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">{group.name}</h4>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  {group.online} online
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span>{group.members} members</span>
                <span>•</span>
                <span>{group.type}</span>
                <span>•</span>
                <span>{group.location}</span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="default" className="bg-primary hover:bg-primary-light">
                  <MessageCircle className="w-3 h-3 mr-1" />
                  Join Chat
                </Button>
                <Button size="sm" variant="outline">
                  <Video className="w-3 h-3 mr-1" />
                  Video Call
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Button className="w-full bg-secondary hover:bg-secondary-light text-secondary-foreground">
          <Users className="w-4 h-4 mr-2" />
          Explore More Communities
        </Button>
      </Card>

      <Card className="p-6 shadow-soft">
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle className="w-5 h-5 text-secondary" />
          <h3 className="text-lg font-semibold">Active Chats</h3>
        </div>

        <div className="space-y-3">
          {activeChats.map((chat) => (
            <div key={chat.id} className="p-3 bg-secondary-extra-light rounded-lg hover:bg-secondary-light transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-sm">{chat.title}</h4>
                <span className="text-xs text-muted-foreground">{chat.time}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{chat.lastMessage}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {chat.participants} participants
                </span>
                <Heart className="w-3 h-3 text-wellness-calm" />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};