export const storageKey = 'theme-preference'
export const theme = {
  value: getColorPreference(),
}

function getColorPreference(): string | null {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey)
  else return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark'
}

export const setPreference = (): void => {
  localStorage.setItem(storageKey, theme.value!)
  reflectPreference()
}

const reflectPreference = (): void => {
  document.firstElementChild?.setAttribute('data-theme', theme.value!)
}
reflectPreference()

// sync with system changes
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({ matches: isDark }) => {
    theme.value = isDark ? 'dark' : 'light'
    setPreference()
  })
