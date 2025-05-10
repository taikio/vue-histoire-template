<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <Icon :icon="`${props.icon}`" :inline="true" />
</template>

<style scoped>
svg {
  font-size: 1.2rem;
}
</style>
