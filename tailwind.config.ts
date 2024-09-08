import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                midnight: {
                    50: '#f3f4f6',
                    100: '#e5e7eb',
                    200: '#d1d5db',
                    300: '#9ca3af',
                    400: '#6b7280',
                    500: '#4b5563',
                    600: '#374151',
                    700: '#1f2937',
                    800: '#111827',
                    900: '#0b1120',
                    950: '#030712'
                },
                gradient: '#1AB8E0',
                text: {
                    validation: '#FFB82E',
                    error: '#F93232',
                    success: '#439F6E',
                },
                yellow: '#FFDFA0',
            },
            aspectRatio: {
                auto: 'auto',
                square: '1 / 1',
                video: '16 / 9'
            }
        }
    },
    darkMode: 'class',
}
// 50: '#f3f4f6',
// 100: '#e5e7eb',
// 200: '#d1d5db',
// 300: '#9ca3af',
// 400: '#6b7280',
// 500: '#4b5563',
// 600: '#374151',
// 700: '#1f2937',
// 800: '#111827',
// 900: '#0b1120',
// 950: '#030712'
// #030712

// extend: {
//     colors: {
//       gradient: {
//         DEFAULT: '#33DBD9',
//         light: '#1AC8E0',
//         lighter: '#1AB1E0',
//       },
//       stroke: '#1AB8E0',
//       bg: '#FFFFFF',
//       gray: {
//         950: '#030712',
//         900: '#111827',
//         800: '#1F2937',
//         700: '#374151',
//         600: '#4B5563',
//         500: '#6B7280',
//         400: '#9CA3AF',
//         300: '#D1D5DB',
//         200: '#E5E7EB',
//         100: '#F3F4F6',
//         DEFAULT: '#F9FAFB',
//       },
//       text: {
//         validation: '#FFB82E',
//         error: '#F93232',
//         success: '#439F6E',
//       },
//     },
//   },