"use client";

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FlowerIcon } from './icons/flower-icon';
import { MusicalNoteIcon } from './icons/musical-note-icon';
import { StrawberryIcon } from './icons/strawberry-icon';
import { MyMelodyIcon } from './icons/my-melody-icon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeartIcon } from './icons/heart-icon';

interface AnimatedLetterProps {
  content: string;
}

const icons = [FlowerIcon, StrawberryIcon, MusicalNoteIcon, HeartIcon];

export default function AnimatedLetter({ content }: AnimatedLetterProps) {
  const [animatedContent, setAnimatedContent] = React.useState('');
  const [isRevealed, setIsRevealed] = React.useState(false);
  const [poppedParticles, setPoppedParticles] = React.useState<Set<number>>(new Set());
  const [nameInput, setNameInput] = React.useState('');
  const [isUnlocked, setIsUnlocked] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [unlockMessage, setUnlockMessage] = React.useState('');

  React.useEffect(() => {
    if (isRevealed) {
      setAnimatedContent('');
      let i = 0;
      const interval = setInterval(() => {
        if (i < content.length) {
            setAnimatedContent((prev) => prev + content[i]);
            i++;
        } else {
            clearInterval(interval);
        }
      }, 25);
      return () => clearInterval(interval);
    }
  }, [content, isRevealed]);
  
  const handleNameCheck = () => {
    const enteredName = nameInput.trim().toUpperCase().replace(/\s+/g, '');
    const validNames = ['DAIANA', 'CLEMENTINA', 'DAIANACLEMENTINA'];

    if (validNames.includes(enteredName)) {
      setIsUnlocked(true);
      setUnlockMessage('¡Correcto! Sabía que eras tú, mi amor. ❤️');
      setErrorMessage('');
    } else {
      setErrorMessage('Inténtalo de nuevo, solo la dueña de mi corazón puede entrar.');
      setIsUnlocked(false);
    }
  };

  const particles = React.useMemo(() => Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    Icon: i < 10 ? HeartIcon : icons[i % icons.length],
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `float ${Math.random() * 8 + 6}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 6}s`,
      color: i < 10 ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.3)',
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
       <div className="text-center bg-card/80 backdrop-blur-sm shadow-2xl shadow-primary/20 rounded-2xl p-8 max-w-md w-full flex flex-col items-center">
         <MyMelodyIcon className="w-24 h-24 text-primary mb-4" />
         <p className="text-muted-foreground mb-6">Esta carta solo la puede ver mi novia. Por favor, ingresa tu nombre.</p>
         <div className="flex flex-col gap-4 items-center">
            <Input 
              type="text"
              placeholder="Escribe tu nombre aquí..."
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleNameCheck()}
              className="max-w-xs text-center"
              disabled={isUnlocked}
            />
            {!isUnlocked && (
              <Button onClick={handleNameCheck}>
                Verificar
              </Button>
            )}

            {errorMessage && <p className="text-destructive text-sm mt-2">{errorMessage}</p>}
            {unlockMessage && <p className="text-primary text-sm mt-2 font-semibold">{unlockMessage}</p>}

            {isUnlocked && (
              <button onClick={() => setIsRevealed(true)} className="mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transform hover:scale-105 transition-transform duration-300 font-headline text-xl animate-in fade-in">
                Abrir tu Carta
              </button>
            )}
         </div>
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
            "absolute opacity-30 dark:opacity-20 transform-gpu",
            poppedParticles.has(p.id) && 'animate-pop'
            )}
          style={p.style}
        >
          <p.Icon className="w-6 h-6" />
        </button>
      ))}

      <Card className="w-full bg-card/80 backdrop-blur-sm shadow-2xl shadow-primary/20 rounded-2xl overflow-hidden">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl text-foreground">Para Mi Amor</CardTitle>
          <CardDescription className="font-body text-muted-foreground">1 de Agosto</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-body text-lg/relaxed text-foreground whitespace-pre-wrap">
            {animatedContent}
            {animatedContent.length === content.length && <span className="inline-block w-2 h-5 bg-foreground/70 animate-pulse ml-1" />}
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
           <MyMelodyIcon className="w-12 h-12 text-primary" />
        </CardFooter>
      </Card>
    </div>
  );
}
