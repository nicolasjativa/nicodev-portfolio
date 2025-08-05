// lib/utils.ts

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combina clases condicionales y resuelve conflictos de Tailwind.
 * Ideal para usar con Tailwind + lógica booleana.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
