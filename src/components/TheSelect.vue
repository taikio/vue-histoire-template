<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import Iconify from "./Iconify.vue";

const props = defineProps({
  name: String,
  label: String,
  options: Array,
  rules: String,
  showToTop: Boolean,
});

const emit = defineEmits(["update:selected"]);

const modelValue = defineModel({ required: true });
const isOptionsVisible = ref(false);
const outsideClickListener = ref(null);
const searchQuery = ref("");
const touched = ref(false);
const errorMessage = ref("");

const isRequired = computed(() => props.rules?.includes("required"));
const inputValue = computed(() => modelValue.value?.label ?? "");

// Validação básica
const validate = () => {
  if (isRequired.value && !modelValue.value) {
    errorMessage.value = "Este campo é obrigatório";
    return false;
  }
  errorMessage.value = "";
  return true;
};

const showOptions = () => {
  isOptionsVisible.value = true;
};

const handleBlur = () => {
  touched.value = true;
  validate();
};

const filteredOptions = computed(() =>
  searchQuery.value === ""
    ? props.options
    : props.options.filter((option) =>
        option.label.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
);

const onOverlayEnter = () => {
  if (!outsideClickListener.value) {
    outsideClickListener.value = (event) => {
      const elementId = event.target.id;
      if (elementId !== "search-input" && elementId !== props.name) {
        isOptionsVisible.value = false;
        searchQuery.value = "";
      }
    };
    document.addEventListener("click", outsideClickListener.value);
  }
};

const onOverlayLeave = () => {
  if (outsideClickListener.value) {
    document.removeEventListener("click", outsideClickListener.value);
    outsideClickListener.value = null;
  }
};

const setSelectedOption = (option) => {
  modelValue.value = option;
  validate();
  emit("update:selected", option);
};

const clearValue = () => {
  modelValue.value = null;
  validate();
};

// Validação inicial
onMounted(() => {
  validate();
});

onBeforeUnmount(() => {
  onOverlayLeave();
});
</script>

<template>
  <div class="float-label-input">
    <input
      :id="props.name"
      :value="inputValue"
      type="text"
      autocomplete="off"
      placeholder=" "
      readonly
      class="input"
      :class="errorMessage && touched ? 'input-error' : 'input-normal'"
      @click="showOptions"
      @blur="handleBlur"
    />
    <label :for="props.name" class="label">
      {{ props.label }}
      <span v-if="isRequired" class="required-icon">*</span>
    </label>

    <span class="chevron-icon">
      <i
        :class="isOptionsVisible ? 'icon-chevron-up' : 'icon-chevron-down'"
      ></i>
    </span>

    <!-- ======= clear icon ======= -->
    <div v-if="inputValue" class="clear-container">
      <span class="clear-icon" @click="clearValue">×</span>
    </div>

    <small class="error-message">{{
      errorMessage && touched ? errorMessage : "&nbsp;"
    }}</small>

    <Transition
      name="select-overlay"
      @enter="onOverlayEnter"
      @leave="onOverlayLeave"
    >
      <div
        v-if="isOptionsVisible"
        class="options-container"
        :class="showToTop ? 'show-top' : 'show-bottom'"
      >
        <div class="search-container">
          <input
            id="search-input"
            v-model="searchQuery"
            type="text"
            placeholder="Pesquisar"
            class="search-input"
          />

          <Iconify icon="mdi:magnify" class="search-icon" />
        </div>
        <div
          v-for="option in filteredOptions"
          :key="option.value"
          class="option-item"
          :class="modelValue?.value === option.value ? 'option-selected' : ''"
          @click="setSelectedOption(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.float-label-input {
  position: relative;
  width: 100%;
  padding: 2px 4px;
  min-width: 18rem;
  margin: 4px 0;
  overflow-y: visible;
  z-index: 4;
}

.input {
  display: block;
  width: 100%;
  appearance: none;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  background-color: white;
  padding: 0.8rem 0.5rem 0.8rem 0.5rem;
  line-height: normal;
}

.input:focus {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  outline: none;
}

.input-normal {
  border-color: #a3a3a3;
}

.input-normal:focus {
  border-color: #1e40af;
}

.input-error {
  border-color: #ef4444;
}

.input-error:focus {
  border-color: #ef4444;
}

.label {
  position: absolute;
  left: 0.5rem;
  top: 0.9rem;
  pointer-events: none;
  background-color: white;
  padding: 0 0.25rem;
  color: #737373;
  transition: transform 0.2s ease-in-out, font-size 0.2s ease-in-out;
}

.required-icon {
  color: #ef4444;
  font-size: 0.75rem;
  vertical-align: super;
}

.chevron-icon {
  position: absolute;
  right: 0.6rem;
  top: 0.6rem;
  color: #737373;
  font-size: 1.3rem;
}

.icon-chevron-down::before {
  content: "▼";
  font-size: 0.8rem;
}

.icon-chevron-up::before {
  content: "▲";
  font-size: 0.8rem;
}

.clear-container {
  position: absolute;
  right: 1.75rem;
  top: 0.8rem;
}

.clear-icon {
  cursor: pointer;
  color: #a3a3a3;
  font-size: 1.1rem;
  line-height: 1;
}

.clear-icon:hover {
  color: #ef4444;
}

.error-message {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #ef4444;
}

.options-container {
  position: absolute;
  left: 0;
  top: 1.2rem;
  z-index: 10;
  height: 16rem;
  width: 100%;
  overflow: auto;
  border-radius: 0.25rem;
  border: 1px solid #d4d4d4;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.05s;
}

.show-top {
  top: -16.2rem;
}

.show-bottom {
  top: 3.1rem;
}

.search-container {
  width: 100%;
  border-bottom: 1px solid #d4d4d4;
  padding: 0.5rem;
  position: relative;
}

.search-input {
  display: block;
  width: 100%;
  appearance: none;
  border-radius: 0.25rem;
  border: 1px solid #d4d4d4;
  border-radius: 0.375rem;
  background-color: white;
  padding: 0.5rem 0.75rem;
  padding-left: 2rem;
  line-height: normal;
}

.search-input:focus {
  border-color: #1e40af;
  outline: none;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 1rem;
  color: #737373;
}

.option-item {
  margin: 0.25rem 0;
  cursor: pointer;
  padding: 0.5rem;
}

.option-item:hover {
  background-color: #eff6ff;
  color: #1e40af;
}

.option-selected {
  background-color: #eff6ff;
  color: #1e40af;
}

/* Mantém a lógica do float label original */
.float-label-input:focus-within label,
.float-label-input input:not(:placeholder-shown) + label {
  transform: translateY(-1.2rem);
  background-color: white;
  font-size: 0.7rem;
}

.float-label-input:focus-within input:not(.input-error) + label {
  color: #1e40af;
}

.float-label-input:focus-within input.input-error + label {
  color: #ef4444;
}

/* Animação para o overlay de seleção */
.select-overlay-enter-active,
.select-overlay-leave-active {
  transition: opacity 0.2s ease;
}

.select-overlay-enter-from,
.select-overlay-leave-to {
  opacity: 0;
}
</style>
