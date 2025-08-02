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
  prompt: z.string().describe('A prompt describing the content of the letter.'),
});
export type GenerateMyMelodyLetterInput = z.infer<typeof GenerateMyMelodyLetterInputSchema>;

const GenerateMyMelodyLetterOutputSchema = z.object({
  letterContent: z.string().describe('The generated letter content with My Melody theme.'),
});
export type GenerateMyMelodyLetterOutput = z.infer<typeof GenerateMyMelodyLetterOutputSchema>;

export async function generateMyMelodyLetter(input: GenerateMyMelodyLetterInput): Promise<GenerateMyMelodyLetterOutput> {
  return generateMyMelodyLetterFlow(input);
}

const generateMyMelodyLetterPrompt = ai.definePrompt({
  name: 'generateMyMelodyLetterPrompt',
  input: {schema: GenerateMyMelodyLetterInputSchema},
  output: {schema: GenerateMyMelodyLetterOutputSchema},
  prompt: `You are a creative AI assistant specializing in generating personalized letters with a My Melody theme.

  Please generate a letter based on the following prompt, incorporating elements of animation, using a soft rose (#E0BBE4) and light pink (#F8E8F8) color scheme, Belleza and Alegreya fonts, and My Melody-themed motifs (e.g., musical notes, flowers).

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
