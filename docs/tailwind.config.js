module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ["Quicksand", "sans-serif"],
        body: ["Nunito", "sans-serif"]
      },
      colors: {
        white: {
          default: "#fff",
          "30": "rgba(255,255,255,0.3)",
          "50": "rgba(255,255,255,0.5)",
          "70": "rgba(255,255,255,0.7)"
        },
        black: {
          default: "#000",
          "30": "rgba(0,0,0,0.3)",
          "50": "rgba(0,0,0,0.5)",
          "70": "rgba(0,0,0,0.7)"
        },
        primary: {
          default: "#a11cf2",
          "50": "#a11cf278",
          "90": "#a11cf2e6"
        },
        accent: {
          default: "#13fed4",
          "50": "#13fed480",
          "90": "#13fed4e6"
        }
      },
      maxWidth: { "7xl": "80rem" },
      inset: { "1/2": "50%" },
      borderRadius: { xl: "1.5rem" },
      screens: { xxl: "1400px" },
      lineHeight: { normal: "22px" }
    }
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "focus-within"]
  },
  plugins: [],
  corePlugins: {}
};
