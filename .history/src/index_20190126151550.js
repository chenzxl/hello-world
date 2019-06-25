import Button from './components/button';
import Radio from './components/radio';
import Checkbox from './components/checkbox';
import Input from './components/input';
import Icon from './components/icon';
import Select from './components/select';
import Slider from './components/slider';
import Toggle from './components/toggle';
import Tooltip from './components/tooltip';

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
