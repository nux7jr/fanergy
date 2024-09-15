import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

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

                validation: '#439F6E',
                invalid: '#F93232',
                success: '#439F6E',

                yellow: '#FFDFA0',
                linear: {
                    0: '#33DBD9',
                    40: '#1AC8E0',
                    100: '#1AB1E0'
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
