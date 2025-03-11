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
        "left-slide-in": "fade-in 0.3s ease-out 1, slide-left 0.3s ease-out 1",
        "top-slide-in": "fade-in 0.2s ease-out 1, slide-top 0.2s ease-out 1",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "slide-top": {
          "0%": {
            transform: "translateY(-30%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        "slide-left": {
          "0%": {
            transform: "translateX(-10%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
  variants: { extend: {} },
  plugins: [],
};
