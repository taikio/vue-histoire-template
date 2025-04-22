<script lang="ts" setup>
import { Story, Variant } from "histoire";

const props = defineProps<{
  story: Story;
  variant?: Variant;
}>();

function hasWrapper() {
  return (
    props.story.meta?.wrapper !== false &&
    props.variant?.meta?.wrapper !== false
  );
}
</script>

<template>
  <div class="global-wrapper">
    <slot />
  </div>
</template>

<style scoped>
.global-wrapper {
  width: 100%;
  min-height: 38rem;
  /* place-content: center; */
  border: solid 1px rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem;
  background-color: inherit;
}
</style>
