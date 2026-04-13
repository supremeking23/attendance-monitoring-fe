/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // COLOR MAPPINGS FOR SHADCN/UI COMPONENTS
      // ============================================================
      // These colors come from the CSS variables defined in src/index.css
      // (lines 118-155 for light mode, lines 157-193 for dark mode).
      //
      // ORIGIN: When you ran "npx shadcn@latest add button card input label",
      // shadcn/ui added theme CSS variables AND @apply directives in index.css,
      // but it does NOT automatically update tailwind.config.js with the color mappings.
      // This is a known gap in the shadcn generation process.
      //
      // WHY NEEDED: Without these mappings, Tailwind doesn't recognize color names like
      // "border", "ring", "background", etc. in @apply statements. When index.css
      // uses "@apply border-border outline-ring/50", Tailwind fails to compile
      // because it doesn't know what those color utilities should map to.
      //
      // THE FIX: Map each Tailwind color name to its corresponding CSS variable
      // (e.g., border: 'var(--border)'). This tells Tailwind: "When someone uses
      // bg-background, generate a class using the CSS variable --background".
      //
      // MANUAL vs AUTOMATIC: The shadcn CLI should have done this automatically,
      // but it doesn't for the newer "shadcn" package (v4). For @shadcn/ui, the
      // React preset typically includes this. Since we're using "shadcn" standalone,
      // we must add it manually.
      
      colors: {
        // Core UI colors
        border: 'var(--border)',             // Light: oklch(0.922 0 0), Dark: oklch(1 0 0 / 10%)
        ring: 'var(--ring)',                 // Light: oklch(0.708 0 0), Dark: oklch(0.556 0 0)
        background: 'var(--background)',     // Light: oklch(1 0 0), Dark: oklch(0.145 0 0)
        foreground: 'var(--foreground)',     // Light: oklch(0.145 0 0), Dark: oklch(0.985 0 0)
        
        // Card colors
        card: 'var(--card)',                 // Light: oklch(1 0 0), Dark: oklch(0.205 0 0)
        'card-foreground': 'var(--card-foreground)',     // Light: oklch(0.145 0 0), Dark: oklch(0.985 0 0)
        
        // Popover colors
        popover: 'var(--popover)',           // Light: oklch(1 0 0), Dark: oklch(0.205 0 0)
        'popover-foreground': 'var(--popover-foreground)',
        
        // Primary action colors
        primary: 'var(--primary)',           // Light: oklch(0.205 0 0), Dark: oklch(0.922 0 0)
        'primary-foreground': 'var(--primary-foreground)',
        
        // Secondary colors
        secondary: 'var(--secondary)',       // Light: oklch(0.97 0 0), Dark: oklch(0.269 0 0)
        'secondary-foreground': 'var(--secondary-foreground)',
        
        // Muted/disabled state colors
        muted: 'var(--muted)',               // Light: oklch(0.97 0 0), Dark: oklch(0.269 0 0)
        'muted-foreground': 'var(--muted-foreground)',
        
        // Accent/highlight colors
        accent: 'var(--accent)',             // Light: oklch(0.97 0 0), Dark: oklch(0.269 0 0)
        'accent-foreground': 'var(--accent-foreground)',
        
        // Error/destructive action colors
        destructive: 'var(--destructive)',   // Light: oklch(0.577 0.245 27.325), Dark: oklch(0.704 0.191 22.216)
        
        // Input field colors
        input: 'var(--input)',               // Light: oklch(0.922 0 0), Dark: oklch(1 0 0 / 15%)
      },
    },
  },
  plugins: [],
}

