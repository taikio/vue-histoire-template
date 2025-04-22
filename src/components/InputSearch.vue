<script setup>
import Iconify from "./Iconify.vue";

const props = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="input-search">
    <input
      type="text"
      :placeholder="props.placeholder"
      class="input-search__field"
      :disabled="props.disabled"
    />

    <Iconify icon="mdi:magnify" class="input-search__icon" />
  </div>
</template>

<style scoped>
.input-search {
  width: 100%;
  position: relative;
}

.input-search__field {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 0.5rem;
  padding-left: 2rem;
  border-radius: 0.25rem;
  border: 1px solid #d1d5db;
  outline-style: none;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #595959;
}
.input-search__field:focus {
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
}

.input-search__icon {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  color: #595959;
}
</style>
