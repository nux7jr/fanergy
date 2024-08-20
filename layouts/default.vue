<template>
    <div class=" divide-gray-200 dark:divide-gray-800 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-900 min-h-dvh">
      <header>
        <slot name="header">
          Default header content
        </slot>
      </header>
      <main>
        <slot />
      </main>
    </div>
  </template>