<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="input-container">
    <label>{{ label }}</label>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped>
.input-container {
  width: 100%;
  padding: 2px 4px;
  display: flex;
  flex-direction: column;
}

.input-container input {
  width: 100%;
  padding: 8px 14px;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
}

.input-container label {
  color: #999;
  font-size: 1rem;
  margin-bottom: 12px;
}
</style>
