const rgba = (r: number, g: number, b: number, a: number) =>
  `rgba(${r}, ${g}, ${b}, ${a})`

const brand = (opacity: number) => rgba(76, 152, 221, opacity)
const ui = (opacity: number) => rgba(243, 243, 243, opacity)
const dark = (opacity: number) => rgba(12, 12, 12, opacity)
const accent = {
  blue: (opacity: number) => rgba(76, 152, 221, opacity),
  green: (opacity: number) => rgba(76, 221, 152, opacity),
  red: (opacity: number) => rgba(221, 76, 76, opacity),
  yellow: (opacity: number) => rgba(221, 221, 76, opacity),
} as const

export const colors = {
  bg: rgba(39, 40, 49, 1),

  brand: brand(1),
  'brand.80': brand(0.8),
  'brand.60': brand(0.6),
  'brand.40': brand(0.4),
  'brand.20': brand(0.2),

  ui: ui(1),
  'ui.100': ui(1),
  'ui.80': ui(0.8),
  'ui.60': ui(0.6),
  'ui.40': ui(0.4),
  'ui.20': ui(0.2),
  'ui.10': ui(0.1),
  'ui.5': ui(0.05),

  dark: dark(1),
  'dark.100': dark(1),
  'dark.80': dark(0.8),
  'dark.60': dark(0.6),
  'dark.40': dark(0.4),
  'dark.20': dark(0.2),
  'dark.10': dark(0.1),
  'dark.5': dark(0.05),

  accent: {
    blue: accent.blue(1),
    'blue.100': accent.blue(1),
    'blue.60': accent.blue(0.6),
    'blue.20': accent.blue(0.2),

    green: accent.green(1),
    'green.100': accent.green(1),
    'green.60': accent.green(0.6),
    'green.20': accent.green(0.2),

    red: accent.red(1),
    'red.100': accent.red(1),
    'red.60': accent.red(0.6),
    'red.20': accent.red(0.2),

    yellow: accent.yellow(1),
    'yellow.100': accent.yellow(1),
    'yellow.60': accent.yellow(0.6),
    'yellow.20': accent.yellow(0.2),
  },
} as const
