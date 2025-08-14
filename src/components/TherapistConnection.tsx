import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Calendar, Clock, Video, MessageSquare, MapPin } from "lucide-react";

const therapists = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    specialty: "Anxiety & Depression",
    rating: 4.9,
    experience: "8+ years",
    location: "Licensed in CA, NY",
    available: "Today 3:00 PM",
    price: "$120/session",
    image: "/therapist1.jpg"
  },
  {
    id: 2,
    name: "Dr. Michael Rodriguez",
    specialty: "Trauma & PTSD",
    rating: 4.8,
    experience: "12+ years",
    location: "Licensed in TX, FL",
    available: "Tomorrow 10:00 AM",
    price: "$150/session",
    image: "/therapist2.jpg"
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    specialty: "Relationship Counseling",
    rating: 4.9,
    experience: "6+ years",
    location: "Licensed in WA, OR",
    available: "Today 5:30 PM",
    price: "$100/session",
    image: "/therapist3.jpg"
  }
];

export const TherapistConnection = () => {
  return (
    <Card className="p-6 shadow-wellness">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-primary-extra-light rounded-full">
          <Video className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold">Connect with Licensed Therapists</h3>
      </div>

      <div className="space-y-4 mb-6">
        {therapists.map((therapist) => (
          <div key={therapist.id} className="p-4 bg-background rounded-xl border hover:shadow-soft transition-all">
            <div className="flex items-start gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={therapist.image} />
                <AvatarFallback className="bg-primary-extra-light text-primary">
                  {therapist.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold">{therapist.name}</h4>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-wellness-energy text-wellness-energy" />
                    <span className="text-sm font-medium">{therapist.rating}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-2">{therapist.specialty}</p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {therapist.experience}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <MapPin className="w-3 h-3 mr-1" />
                    {therapist.location}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-secondary">Available: {therapist.available}</p>
                    <p className="text-xs text-muted-foreground">{therapist.price}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      Message
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary-light">
                      <Calendar className="w-3 h-3 mr-1" />
                      Book Session
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="w-full">
          <Video className="w-4 h-4 mr-2" />
          Emergency Support
        </Button>
        <Button className="w-full bg-secondary hover:bg-secondary-light text-secondary-foreground">
          <MessageSquare className="w-4 h-4 mr-2" />
          Crisis Chat
        </Button>
      </div>
    </Card>
  );
};