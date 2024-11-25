import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icon: {
        iconfont: 'fa' || 'md' || 'mdi'
    },
    theme: {
        dark: {
            background: '#111111',
        }
    }
});
