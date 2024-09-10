<template>
    <div class="w-max flex gap-2 justify-center items-center px-3 py-1.5 bg-yellow border-full rounded-3xl">
      <component color="#0b1120" :is="iconComponent" :size="16" />
      <div class="text-midnight-900 font-medium">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  import {
    Clapperboard, Film, Image, Images, MicVocal, Music
  } from 'lucide-vue-next';
  
  const icons = {
    clapperboard: Clapperboard,
    film: Film,
    image: Image,
    images: Images,
    'mic-vocal': MicVocal,
    music: Music,
  };
  
  const props = defineProps({
    type: {
      type: String,
      default: ''
    }
  });
  
  const iconComponent = computed(() => {
    return icons[props.type] || null;
  });
  </script>