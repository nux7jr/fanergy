<template>
    <UContainer>
        <UCard class="mt-10">
            <template #header>
                <div class="flex justify-between">
                    <h1>Welcome to fanergy</h1>
                    <ColorScheme>
                        <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" />
                    </ColorScheme>
                </div>
                <div>
                    <TestComp></TestComp>
                    <UBreadcrumb :links="links" />
                    <div>
                        {{ foo }}
                    </div>
                    <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
                    <TestUser></TestUser>
                </div>
                <div class="flex gap-3 flex-col">
                    <UButton class="w-min block" label="Open" @click="isOpen = true" />
                    <UModal v-model="isOpen">
                        <div class="p-4">
                            <Placeholder class="h-48" />
                        </div>
                    </UModal>
                    <div>
                        <TestDate />
                    </div>
                    <UProgress :value="70" />
                </div>

            </template>
            <!-- <UButton icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation
            </UButton> -->
        </UCard>
    </UContainer>
</template>
<script setup lang="ts">
const foo = useFoo();
const isOpen = ref(false)
const links = [{
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
}, {
    label: 'Navigation',
    icon: 'i-heroicons-square-3-stack-3d'
}, {
    label: 'Breadcrumb',
    icon: 'i-heroicons-link'
}]
</script>