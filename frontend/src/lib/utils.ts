import { clsx, type ClassValue } from "clsx"; 
// Importing the 'clsx' library and the 'ClassValue' type. 'clsx' is a utility that helps conditionally join class names, 
// and 'ClassValue' defines the types of class names or conditions it can accept.

import { twMerge } from "tailwind-merge"; 
// Importing 'twMerge' from 'tailwind-merge'. It helps merge Tailwind CSS class names intelligently, resolving conflicts (e.g., if you provide conflicting classes like "p-4" and "p-8", it'll retain the last one).

// Define a utility function 'cn' that accepts a list of class values
export function cn(...inputs: ClassValue[]) {
  // Combines the input classes using 'clsx' and resolves any class conflicts using 'twMerge'
  return twMerge(clsx(inputs));
  // 'clsx' handles conditional class names and joins them into a string
  // 'twMerge' ensures that conflicting Tailwind CSS classes are merged correctly, prioritizing the later ones
}
