import AnimatedLetter from '@/components/animated-letter';
import Image from 'next/image';

export default function Home() {
  const letterContent = `Mi novia, la más enojona, chinchosa y dramática… sí, esa misma es a quien amo con todo mi corazón. Porque detrás de cada enojo está su dulzura, y en cada drama, su forma única de amar. Desde que llegaste a mi vida, todo se ha vuelto más intenso, más bonito, más real. Trajiste risas, retos, abrazos que sanan, y una manera de querer que no cambio por nada. Eres mi caos favorito… y mi paz también.

Ni sabía que existía este día pero se que tu lo sabias …Gracias por estar en mi vida, por hacerme sentir querido, por hacer que los días sean más lindos solo con tu sonrisa. Espero tenerte a mi lado por el resto de mi vida… y más allá te amo DAIANA.

lo siento por no estar ahí estoy preparando algo muy bonito pronto estaremos juntitos, quiero que sepas algo muy claro: yo tengo a la novia más hermosa del mundo, y no la cambiaría por nada ni por nadie. Eres única, con todas tus locuras, tus enojos y tu dulzura, y te amo tal como eres.`;

  return (
    <main 
      className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4 selection:bg-accent selection:text-accent-foreground"
      style={{
        backgroundImage: `url(/mymelody.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="z-10 flex flex-col items-center justify-center w-full">
        <header className="text-center mb-8 flex flex-col items-center gap-4">
          <h1 className="font-headline text-4xl md:text-5xl text-foreground drop-shadow-md">
            Para la mejor novia
          </h1>
        </header>
        <AnimatedLetter content={letterContent} />
        <footer className="absolute bottom-4 text-center text-sm text-muted-foreground">
          <p>Hecho con ♡ para ti</p>
        </footer>
      </div>
    </main>
  );
}
