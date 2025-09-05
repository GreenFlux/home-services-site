import { defineConfig, presetUno, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography()
  ],
  theme: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a'
      },
      secondary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a'
      }
    },
    animation: {
      keyframes: {
        'fade-up': `{
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }`,
        'slide-left': `{
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }`,
        'slide-right': `{
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }`
      },
      durations: {
        'fade-up': '0.6s',
        'slide-left': '0.6s',
        'slide-right': '0.6s'
      },
      timingFns: {
        'fade-up': 'ease',
        'slide-left': 'ease',
        'slide-right': 'ease'
      }
    }
  },
  shortcuts: [
    // Button styles
    ['btn', 'px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg inline-block'],
    ['btn-primary', 'btn bg-primary-600 text-white hover:bg-primary-700'],
    ['btn-secondary', 'btn border-2 border-white text-white hover:bg-white hover:text-primary-600'],
    ['btn-outline', 'btn border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white'],
    
    // Container styles
    ['container', 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'],
    ['section', 'py-20'],
    ['section-alt', 'section bg-gray-50'],
    
    // Card styles
    ['card', 'bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'],
    ['card-padding', 'p-6'],
    
    // Typography
    ['section-title', 'text-3xl md:text-4xl font-bold text-gray-900 mb-4'],
    ['section-subtitle', 'text-lg text-gray-600 max-w-2xl mx-auto'],
    
    // Feature icons
    ['feature-icon', 'w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4'],
    ['service-icon', 'w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4'],
    
    // Animation classes for scroll reveal
    ['animate-on-scroll', 'opacity-0 translate-y-5 transition-all duration-600 ease'],
    ['slide-in-left', 'opacity-0 -translate-x-8 transition-all duration-600 ease'],
    ['slide-in-right', 'opacity-0 translate-x-8 transition-all duration-600 ease'],
    
    // Visible state (added by JavaScript)
    ['visible', 'opacity-100 translate-y-0 translate-x-0']
  ],
  rules: [
    // Custom stagger animation rule
    [/^stagger-(\d+)$/, ([, d]) => ({
      'transition-delay': `${parseInt(d) * 100}ms`
    })],
    
    // Custom animation fill mode
    ['animate-fill-both', { 'animation-fill-mode': 'both' }],
  ],
  safelist: [
    'visible',
    'animate-on-scroll',
    'slide-in-left', 
    'slide-in-right',
    'stagger-1',
    'stagger-2',
    'stagger-3',
    'stagger-4',
    'stagger-5',
    'stagger-6',
    'stagger-animation'
  ]
})