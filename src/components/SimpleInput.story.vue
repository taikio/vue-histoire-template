<script setup>
import { reactive } from "vue";
import SimpleInput from "./SimpleInput.vue";
import HistoireWrapper from "./HistoireWrapper.vue";

const stateDefault = reactive({
  value: "",
  label: "Input base",
});
</script>

<template>
  <Story title="Simple Input">
    <Variant title="Default">
      <template #default>
        <SimpleInput :value="stateDefault.value" :label="stateDefault.label" />
      </template>

      <template #controls>
        <HstText v-model="stateDefault.value" title="Value" />
        <HstText v-model="stateDefault.label" title="Label" />
      </template>
    </Variant>
  </Story>
</template>
