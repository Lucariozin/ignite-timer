type Sizes = 'lg' | 'md' | 'sm'

const sizesObj: { [K in Sizes]: number } = {
  lg: 1200,
  md: 900,
  sm: 600,
}

export const theme = {
  palette: {
    white: '#FFFFFF',
    gray: {
      100: '#E1E1E6',
      200: '#C4C4CC',
      300: '#8D8D99',
      400: '#7C7C8A',
      500: '#323238',
      550: '#29292E',
      600: '#202024',
      700: '#121214',
    },
    green: {
      200: '#04D361',
      400: '#00B37E',
      500: '#00875F',
      600: '#015F43',
    },
    red: {
      500: '#D23441',
      600: '#AB222E',
      700: '#7A1921',
    },
    orange: {
      200: '#FBA94C',
    },
  },
  breakpoints: {
    sizes: sizesObj,
    down: (size: Sizes | number) => {
      const sizeNumber = typeof size === 'number' ? size : sizesObj[size]

      return `@media (max-width: ${sizeNumber}px)`
    },
    up: (size: Sizes | number) => {
      const sizeNumber = typeof size === 'number' ? size : sizesObj[size]

      return `@media (min-width: ${sizeNumber}px)`
    },
  },
} as const

export type CustomTheme = typeof theme
