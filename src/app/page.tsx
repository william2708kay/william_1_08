import { Suspense } from 'react';
import { generateMyMelodyLetter } from '@/ai/flows/generate-my-melody-letter';
import AnimatedLetter from '@/components/animated-letter';
import LetterSkeleton from '@/components/letter-skeleton';
import { MyMelodyIcon } from '@/components/icons/my-melody-icon';

async function LetterContent() {
  try {
    const { letterContent } = await generateMyMelodyLetter({
      prompt: "Una dulce y sincera carta para mi novia, celebrando el Día de la Novia el 1 de agosto. Incorpórale el encanto de My Melody, usando temas de amor, música y flores. Haz que se sienta mágica y personal."
    });
    return <AnimatedLetter content={letterContent} />;
  } catch (error) {
    console.error("Failed to generate letter:", error);
    return (
      <div className="text-center text-destructive-foreground bg-destructive p-4 rounded-md">
        <p>Lo siento, no pude escribir la carta en este momento.</p>
        <p>Por favor, inténtalo de nuevo más tarde.</p>
      </div>
    );
  }
}

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4 selection:bg-accent selection:text-accent-foreground">
      <header className="text-center mb-8 flex flex-col items-center gap-4">
        <MyMelodyIcon className="w-24 h-24 text-accent drop-shadow-lg" />
        <h1 className="font-headline text-4xl md:text-5xl text-foreground drop-shadow-md">
          Una Carta Para Mi Novia
        </h1>
      </header>
      <Suspense fallback={<LetterSkeleton />}>
        <LetterContent />
      </Suspense>
      <footer className="absolute bottom-4 text-center text-sm text-muted-foreground">
        <p>Hecho con ♡ para ti</p>
      </footer>
    </main>
  );
}
