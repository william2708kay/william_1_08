import { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function MyMelodyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
      <path
        d="M88.2,50.3c0,16.4-12.7,29.7-28.4,29.7H40.2c-15.7,0-28.4-13.3-28.4-29.7V39.1 c0-6.8,0.7-13.3,2-19.5C18.2,7,28.6,1.4,40.2,1.4h19.6c11.6,0,22,5.6,26.4,18.2c1.3,6.2,2,12.7,2,19.5V50.3z"
        className="text-primary/80 dark:text-primary/60"
      />
      <path
        d="M74.9,13.2C71,7.1,62.9,3.4,54.1,3.4H45.9c-8.8,0-16.9,3.7-20.8,9.8c-2.4,3.7-4,7.9-4.8,12.5 c-0.8,4.5-1.2,9.2-1.2,13.9v10.8c0,14.3,11.2,25.7,24.9,25.7h9.8c13.7,0,24.9-11.4,24.9-25.7V39.7c0-4.7-0.4-9.4-1.2-13.9 C78.9,21.2,77.3,16.9,74.9,13.2z"
        className="fill-current text-background"
      />
      <circle cx="50" cy="50" r="5" className="text-yellow-400" />
      <circle cx="38" cy="45" r="3" fill="black" />
      <circle cx="62" cy="45" r="3" fill="black" />
    </svg>
  );
}
