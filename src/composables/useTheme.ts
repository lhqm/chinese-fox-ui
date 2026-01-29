import { ref, watchEffect } from 'vue';

type Theme = 'suya' | 'huali';

const currentTheme = ref<Theme>('suya');

export function useTheme() {
  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'suya' ? 'huali' : 'suya';
  };

  const setTheme = (theme: Theme) => {
    currentTheme.value = theme;
  };

  // Apply theme to html or body tag
  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme.value);
  });

  return {
    theme: currentTheme,
    toggleTheme,
    setTheme
  };
}
