"use client";

import * as React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FlowerIcon } from './icons/flower-icon';
import { MusicalNoteIcon } from './icons/musical-note-icon';
import { StrawberryIcon } from './icons/strawberry-icon';
import { MyMelodyIcon } from './icons/my-melody-icon';

interface AnimatedLetterProps {
  content: string;
}

const icons = [FlowerIcon, StrawberryIcon, MusicalNoteIcon];

export default function AnimatedLetter({ content }: AnimatedLetterProps) {
  const [animatedContent, setAnimatedContent] = React.useState('');
  const [isRevealed, setIsRevealed] = React.useState(false);
  const [poppedParticles, setPoppedParticles] = React.useState<Set<number>>(new Set());

  React.useEffect(() => {
    if (isRevealed) {
      setAnimatedContent('');
      let i = 0;
      const interval = setInterval(() => {
        setAnimatedContent((prev) => prev + content[i]);
        i++;
        if (i >= content.length) {
          clearInterval(interval);
        }
      }, 25);
      return () => clearInterval(interval);
    }
  }, [content, isRevealed]);

  const particles = React.useMemo(() => Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    Icon: icons[i % icons.length],
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `float ${Math.random() * 8 + 6}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 6}s`,
    }
  })), []);
  
  const handleParticleClick = (id: number) => {
    setPoppedParticles(prev => new Set(prev).add(id));
    setTimeout(() => {
      setPoppedParticles(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }, 300);
  };

  if (!isRevealed) {
    return (
       <div className="text-center">
         <button onClick={() => setIsRevealed(true)} className="px-6 py-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transform hover:scale-105 transition-transform duration-300 font-headline text-xl">
           Abrir tu Carta
         </button>
       </div>
    );
  }

  return (
    <div className="relative w-full max-w-2xl animate-in fade-in duration-1000">
      {particles.map(p => (
         <button
          key={p.id}
          onClick={() => handleParticleClick(p.id)}
          aria-label="interactive particle"
          className={cn(
            "absolute text-accent opacity-30 dark:opacity-20 transform-gpu",
            poppedParticles.has(p.id) && 'animate-pop'
            )}
          style={p.style}
        >
          <p.Icon className="w-6 h-6" />
        </button>
      ))}

      <Card className="w-full bg-card/80 backdrop-blur-sm shadow-2xl shadow-accent/20 rounded-2xl overflow-hidden">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl text-foreground">Para Mi Amor</CardTitle>
          <CardDescription className="font-body text-muted-foreground">1 de Agosto</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-body text-lg/relaxed text-foreground whitespace-pre-wrap">
            {animatedContent}
            <span className="inline-block w-2 h-5 bg-foreground/70 animate-pulse ml-1" />
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
           <MyMelodyIcon className="w-12 h-12 text-accent" />
        </CardFooter>
      </Card>
    </div>
  );
}
