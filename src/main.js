import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

import App from './App.vue';
import router from './router';
import store from './store';
import ApiService from './services/api.service';
import './assets/scss/main.scss';

Vue.config.productionTip = false;

Vue.use(ElementUI);

ApiService.init();

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
