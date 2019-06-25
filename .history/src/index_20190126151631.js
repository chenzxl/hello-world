import 

const components = {
  Button,
  Radio,
  RadioGroup: Radio.Group,
  Checkbox,
  Input,
  Icon,
  Select,
  Slider,
  Toggle,
  Tooltip
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
