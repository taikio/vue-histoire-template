<script setup>
import { reactive } from "vue";
import HistoireWrapper from "./HistoireWrapper.vue";
import TheSelect from "./TheSelect.vue";
import { logEvent } from "histoire/client";

const stateDefault = reactive({
  name: "default-select",
  label: "Select Custom",
  options: [
    { label: "Opção 1", value: "option1" },
    { label: "Opção 2", value: "option2" },
    { label: "Opção 3", value: "option3" },
  ],
  showToTop: false,
  selected: null,
});
</script>

<template>
  <Story
    title="The Select"
    icon="lucide:cpu"
    icon-color="#8B5CF6"
    group="forms"
  >
    <Variant title="Default">
      <template #default>
        <TheSelect
          :name="stateDefault.name"
          :label="stateDefault.label"
          :options="stateDefault.options"
          :show-to-top="stateDefault.showToTop"
          v-model="stateDefault.selected"
          @update:selected="logEvent('update:selected', $event)"
        />
      </template>

      <template #controls>
        <HstText v-model="stateDefault.name" title="Name" />
        <HstText v-model="stateDefault.label" title="Label" />
        <HstCheckbox v-model="stateDefault.showToTop" title="Show to Top" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
### The Select Documentation

The Select component is a customizable dropdown select component for Vue.js. It allows users to select one option from a list of options.
</docs>
