<template>
    <div>
      <header>
        <slot name="header">
          Auth header content
        </slot>
      </header>
      <main>
        <slot />
      </main>
    </div>
  </template>