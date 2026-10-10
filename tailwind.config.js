export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        festive: {
          bg: '#160D2B',
          bgDark: '#0E081D',
          bgSecondary: '#25103F',
          card: 'rgba(37, 16, 63, 0.65)',
          purple: '#8B3DCE',
          purpleLight: '#A855F7',
          pink: '#FF4F9A',
          orange: '#FF8A36',
          gold: '#FFD36A',
          goldWarm: '#F5C04A',
          text: '#FFF8F0',
          muted: '#D8CDE7',
        },
        gold: '#FFD36A',
        amber: '#FF8A36',
        pink: '#FF4F9A',
        purple: '#8B3DCE',
        wine: '#25103F',
        crimson: '#160D2B',
        ruby: '#8B3DCE',
        ink: '#0E081D',
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', 'serif'],
        serif: ['Cinzel', 'serif'],
        body: ['Poppins', 'sans-serif'],
        deva: ['"Noto Serif Devanagari"', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(255, 211, 106, 0.35)',
        'purple-glow': '0 0 35px rgba(139, 61, 206, 0.35)',
        'pink-glow': '0 0 30px rgba(255, 79, 154, 0.35)',
      },
    },
  },
  plugins: [],
}
