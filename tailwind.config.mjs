function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          muted: withOpacity("--color-text-muted"),
          inverted: withOpacity("--color-text-inverted"),
          accent: withOpacity("--color-secondary"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          "button-accent": withOpacity("--color"),
          "button-muted": withOpacity("--color-button-muted"),
        },
      },
      colors: {
        skin: { hue: withOpacity("--color"), muted: withOpacity("--muted") },
      },
      ringColor: { skin: { fill: withOpacity("--color-fill") } },
      gradientColorStops: { skin: { hue: withOpacity("--color-fill") } },
      screens: { xs: "400px" },
      animation: {
        "left-slide": "text-slide 0.3s ease-out 1",
      },
      keyframes: {
        "text-slide": {
          "0%": {
            transform: "translateX(-10%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
      },
    },
  },
  variants: { extend: {} },
  plugins: [],
};
