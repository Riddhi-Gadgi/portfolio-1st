/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // theme.extend
      colors: {
        paper: "#ffffff",
        sand: "#f5f5f7", // Apple light grey surface
        ink: "#1d1d1f", // Apple near-black
        line: "#e5e5ea",
        muted: "#6e6e73",
        accent: {
          DEFAULT: "#FF004F", // Apple blue (replaces the red)
          soft: "#eef5fe",
          dark: "#0058b0",
        },
      },
      fontFamily: {
        // SF Pro on Apple devices, Inter everywhere else
        display: [
          '"SF Pro Display"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Inter"',
          "system-ui",
          "sans-serif",
        ],
        sans: [
          '"SF Pro Text"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Inter"',
          "system-ui",
          "sans-serif",
        ],
        mono: ['"SF Mono"', "ui-monospace", "Menlo", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(17,17,16,.04), 0 8px 24px -8px rgba(17,17,16,.08)",
        lift: "0 2px 4px rgba(17,17,16,.04), 0 18px 40px -12px rgba(17,17,16,.18)",
      },
    },
  },
  plugins: [],
};
