'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating a personalized animated letter with a My Melody theme.
 *
 * @exports generateMyMelodyLetter - A function to generate the My Melody themed letter.
 * @exports GenerateMyMelodyLetterInput - The input type for the generateMyMelodyLetter function.
 * @exports GenerateMyMelodyLetterOutput - The output type for the generateMyMelodyLetter function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMyMelodyLetterInputSchema = z.object({
  prompt: z.string().describe('Un prompt que describe el contenido de la carta.'),
});
export type GenerateMyMelodyLetterInput = z.infer<typeof GenerateMyMelodyLetterInputSchema>;

const GenerateMyMelodyLetterOutputSchema = z.object({
  letterContent: z.string().describe('El contenido de la carta generada con el tema de My Melody.'),
});
export type GenerateMyMelodyLetterOutput = z.infer<typeof GenerateMyMelodyLetterOutputSchema>;

export async function generateMyMelodyLetter(input: GenerateMyMelodyLetterInput): Promise<GenerateMyMelodyLetterOutput> {
  return generateMyMelodyLetterFlow(input);
}

const generateMyMelodyLetterPrompt = ai.definePrompt({
  name: 'generateMyMelodyLetterPrompt',
  input: {schema: GenerateMyMelodyLetterInputSchema},
  output: {schema: GenerateMyMelodyLetterOutputSchema},
  prompt: `Eres un asistente de IA creativo especializado en generar cartas personalizadas con el tema de My Melody.

  Por favor, genera una carta en ESPAÑOL basada en el siguiente prompt, incorporando elementos de animación, usando una paleta de colores rosa suave (#E0BBE4) y rosa claro (#F8E8F8), fuentes Belleza y Alegreya, y motivos temáticos de My Melody (por ejemplo, notas musicales, flores).

  Prompt: {{{prompt}}}
  `,
});

const generateMyMelodyLetterFlow = ai.defineFlow(
  {
    name: 'generateMyMelodyLetterFlow',
    inputSchema: GenerateMyMelodyLetterInputSchema,
    outputSchema: GenerateMyMelodyLetterOutputSchema,
  },
  async input => {
    const {output} = await generateMyMelodyLetterPrompt(input);
    return output!;
  }
);
