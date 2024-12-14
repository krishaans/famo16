import { en } from './en';
import { si } from './si';
import { ta } from './ta';

export const translations = {
  en,
  si,
  ta,
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof en;