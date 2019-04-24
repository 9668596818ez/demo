import Vue from "vue";
import loadingVue from "./Loading.vue";
const LoadingConstructor = Vue.extend(loadingVue);

LoadingConstructor.prototype.close = function() {
  console.log(this.$el.parentNode);
  this.$el.parentNode.removeChild(this.$el);
};

const Loading = () => {
  let instance = new LoadingConstructor({
    el: document.createElement("div"),
    data: {}
  });
  document.body.appendChild(instance.$el);
  Vue.nextTick(() => {
    instance.visible = true;
  });
  return instance;
};

export default Loading;
