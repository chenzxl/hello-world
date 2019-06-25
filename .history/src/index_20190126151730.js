import HelloWorld from "./components/HelloWorld.vue";


const components = {
  HelloWorld
};

const install = function(Vue) {
  if (install.installed) {
    return;
  }
  Object.keys(components).forEach(key => {
    Vue.component(components[keya].name, components[key]);
  });
};

// auto install by cdn
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
