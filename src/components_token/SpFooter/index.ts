import { App as Application } from "vue";
import { registerComponent } from './../../utils/plugins/index'
// @ts-ignore
import SpFooter from "./SpFooter.vue";

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpFooter);
  },
};

export default SpFooter;
