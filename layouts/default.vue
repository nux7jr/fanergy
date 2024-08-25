<template>
    <div class="min-h-dvh bg-gray-200 dark:bg-midnight-950">
        <header>
            <slot name="header">
                <FanergyHeader class="pt-4"></FanergyHeader>
            </slot>
        </header>
        <main>
            <UContainer>
                <slot />
            </UContainer>
        </main>
    </div>
</template>