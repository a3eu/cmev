import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Get the base path for assets - needed for GitHub Pages deployment
export function getBasePath(): string {
  // Since we're using a custom domain (conmusicaenvivo.org), no base path is needed
  return ''
}

// Helper to get properly prefixed asset URLs
export function getAssetUrl(path: string): string {
  const basePath = getBasePath()
  
  // Don't prefix external URLs or URLs that already have the basePath
  if (path.startsWith('http') || path.startsWith(basePath + '/')) {
    return path
  }
  
  // Add basePath to relative URLs
  return basePath + path
}
