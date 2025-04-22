import { defineSetupVue3 } from "@histoire/plugin-vue";
import HistoireWrapper from "./components/HistoireWrapper.vue";
import "./style.css";

export const setupVue3 = defineSetupVue3(({ addWrapper }) => {
  addWrapper(HistoireWrapper);
});
