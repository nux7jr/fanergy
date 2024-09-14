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
                error: '#F93232',
                success: '#439F6E',

                yellow: '#FFDFA0',
            },
            // backgroundImage: theme => ({
            //     'gradient-liner': 
            //         'linear-gradient(to right, #33DBD9 0%, #1AC8E0 46%, #1AB1E0 100%)',
            //   }),
            // backgroundGradient: () => ({
            //     'gradient-primary: linear-gradient(to right, #33DBD9 0%, #1AC8E0 46%, #1AB1E0 100%)'
            //   }),
            aspectRatio: {
                auto: 'auto',
                square: '1 / 1',
                video: '16 / 9'
            }
        }
    },
    darkMode: 'class',
}
