<script setup>
import { ref } from "vue";
import InputSearch from "./components/InputSearch.vue";
import TheSelect from "./components/TheSelect.vue";

const selectoOptions = [
  { label: "Opção 1", value: "option1" },
  { label: "Opção 2", value: "option2" },
  { label: "Opção 3", value: "option3" },
];

const selected = ref(null);
</script>

<template>
  <div class="page">
    <!-- <InputSearch placeholder="O que você está procurando?" /> -->
    <div class="component-box">
      <TheSelect
        name="default-select"
        label="Select Custom"
        :options="selectoOptions"
        v-model="selected"
      />
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.component-box {
  width: 500px;
}
</style>
