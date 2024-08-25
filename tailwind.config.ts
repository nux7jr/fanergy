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
                }
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