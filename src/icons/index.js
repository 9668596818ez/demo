import Vue from "vue";
import Svgicon from "@/components/Svgicon";

// register globally
Vue.component("svg-icon", Svgicon);

const req = require.context("./svg", false, /\.svg$/);
const requireAll = requireContext => {
 return requireContext.keys().map(requireContext)
};
requireAll(req);
