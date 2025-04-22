<script setup>
import InputSearch from "./InputSearch.vue";

const initStateDefault = () => ({
  placeholder: "O que você está procurando?",
  disabled: false,
});

const initStateDisabled = () => ({
  placeholder: "O que você está procurando?",
  disabled: true,
});
</script>

<template>
  <Story
    title="Input Search"
    icon="lucide:cpu"
    icon-color="#8B5CF6"
    group="forms"
  >
    <Variant title="Default" :init-state="initStateDefault">
      <template #default="{ state }">
        <InputSearch
          :placeholder="state.placeholder"
          :disabled="state.disabled"
        />
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.placeholder" title="Placeholder" />
        <HstCheckbox v-model="state.disabled" title="Disabled" />
      </template>
    </Variant>

    <Variant title="Disabled" :init-state="initStateDisabled">
      <template #default="{ state }">
        <InputSearch
          :placeholder="state.placeholder"
          :disabled="state.disabled"
        />
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.placeholder" title="Placeholder" />
        <HstCheckbox v-model="state.disabled" title="Disabled" />
      </template>
    </Variant>
  </Story>
</template>
