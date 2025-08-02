import { Suspense } from 'react';
import { generateMyMelodyLetter } from '@/ai/flows/generate-my-melody-letter';
import AnimatedLetter from '@/components/animated-letter';
import LetterSkeleton from '@/components/letter-skeleton';
import { MyMelodyIcon } from '@/components/icons/my-melody-icon';

async function LetterContent() {
  try {
    const { letterContent } = await generateMyMelodyLetter({
      prompt: "A sweet and heartfelt letter for Daiana, celebrating a special day on August 1st. Infuse it with the charm of My Melody, using themes of friendship, music, and flowers. Make it feel magical and personal."
    });
    return <AnimatedLetter content={letterContent} />;
  } catch (error) {
    console.error("Failed to generate letter:", error);
    return (
      <div className="text-center text-destructive-foreground bg-destructive p-4 rounded-md">
        <p>Sorry, I couldn't write a letter right now.</p>
        <p>Please try again later.</p>
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
          A Letter For Daiana
        </h1>
      </header>
      <Suspense fallback={<LetterSkeleton />}>
        <LetterContent />
      </Suspense>
      <footer className="absolute bottom-4 text-center text-sm text-muted-foreground">
        <p>Crafted with ♡ for you</p>
      </footer>
    </main>
  );
}
