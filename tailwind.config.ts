import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"', 'ans-serif'],
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(67.32deg, #8D1AAB 0%, #190A71 100%)',
        'radialGradient': 'radial-gradient(var(--tw-gradient-stops))',
        'conicGradient':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-background': '#8D1AAB', // Definir un color personalizado
      },
      borderRadius: {
        'custom': '10px 0px 0px 0px',
        'full': '9999px',
      },
      width: {
        'btn': '450px',
        '80': '20rem', // 320px equivalent
      },
      height: {
        'btn': '80px',
        '16': '4rem', // 64px equivalent
      }
    },
  },
  plugins: [],
}
export default config