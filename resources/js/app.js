import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import App from './App.vue';
import CreateContact from './components/contact/CreateContact.vue';
import DisplayContact from './components/contact/DisplayContact.vue';
import EditContact from './components/contact/EditContact.vue';
import ShowContact from './components/contact/ShowContact.vue';
import Datepicker from 'vuejs-datepicker';
Vue.use(Datepicker);

const routes = [
  {
    name: 'CreateContact',
    path: '/api/contacts',
    component: CreateContact
  },
  {
        name: 'DisplayContact',
        path: '/manage',
        component: DisplayContact
  },
  {
      name: 'EditContact',
      path: '/api/contacts/edit/:id',
      component: EditContact
   },
   {
      name: 'ShowContact',
      path: '/api/contacts/show/:id',
      component: ShowContact
   }
 
];

export default {
  
  components: {
    Datepicker
  }
  
}

const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');