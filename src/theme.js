export const theme = {
  colors: {
    bg: '#0f0f10',
    text: '#f5f5f5',
    accent: '#f97316',
    muted: '#a3a3a3',
    surface: '#1c1c1f',
  },
}

export const applyTheme = () => {
  const root = document.documentElement
  root.style.setProperty('--color-bg', theme.colors.bg)
  root.style.setProperty('--color-text', theme.colors.text)
  root.style.setProperty('--color-accent', theme.colors.accent)
  root.style.setProperty('--color-muted', theme.colors.muted)
  root.style.setProperty('--color-surface', theme.colors.surface)
}
