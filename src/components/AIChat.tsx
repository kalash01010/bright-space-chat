import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const aiResponses = [
  "I understand you're feeling this way. It's completely normal to have ups and downs. What specific situation is making you feel like this?",
  "Thank you for sharing that with me. Have you tried any breathing exercises when you feel overwhelmed? I can guide you through one.",
  "It sounds like you've been under a lot of stress. Remember that it's okay to take breaks and prioritize your mental health.",
  "I hear you. Sometimes talking through our feelings can really help. What do you think might help you feel better right now?",
  "You're taking a positive step by reaching out. Would you like me to suggest some coping strategies that might help?",
];

export const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! I'm your AI wellness companion. I'm here to listen and provide support whenever you need it. How are you feeling today?",
      sender: 'ai',
      timestamp: new Date(),
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <Card className="p-6 shadow-wellness h-96 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-primary-extra-light rounded-full">
          <Bot className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold">AI Wellness Support</h3>
      </div>

      <ScrollArea className="flex-1 mb-4 pr-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 animate-fade-in ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.sender === 'ai' && (
                <div className="p-1.5 bg-primary-extra-light rounded-full flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-3 rounded-xl ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary-extra-light text-foreground'
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
              {message.sender === 'user' && (
                <div className="p-1.5 bg-secondary-extra-light rounded-full flex-shrink-0">
                  <User className="w-4 h-4 text-secondary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="flex gap-2">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Share how you're feeling..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-1"
        />
        <Button
          onClick={handleSendMessage}
          disabled={!newMessage.trim()}
          className="bg-primary hover:bg-primary-light px-3"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};