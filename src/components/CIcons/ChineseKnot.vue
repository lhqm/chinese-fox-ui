<template>
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="chinese-knot">
    <path d="M32 4V12M32 52V60" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M12 32H4M60 32H52" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <rect x="16" y="16" width="32" height="32" rx="4" stroke="currentColor" stroke-width="2" transform="rotate(45 32 32)"/>
    <rect x="16" y="16" width="32" height="32" rx="4" stroke="currentColor" stroke-width="2"/>
    <circle cx="32" cy="32" r="4" fill="currentColor"/>
    <!-- Tassels -->
    <path d="M24 56L22 62M40 56L42 62" stroke="currentColor" stroke-width="2"/>
  </svg>
</template>

<style scoped>
.chinese-knot {
  color: var(--cf-color-primary);
  transition: var(--cf-transition);
}

.chinese-knot:hover {
  transform: scale(1.1) rotate(5deg);
}
</style>
