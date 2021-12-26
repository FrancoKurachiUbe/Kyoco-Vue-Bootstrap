const home = { template: `<home></home>`, name:"componente1"};
const lugares = {template: `<lugares></lugares>`, name:"componente2"};
const excursiones = {template: `<excursiones></excursiones>`, name: "componente3"};
const restaurantes = {template: `<restaurantes> </restaurantes>`,name:"componente4"};
const formulario = {template: `<formulario> </formulario>`,name:"componente5"};
const gracias = {template: `<gracias> </gracias>`,name:"componente6"};

const routes = [
  { path: '/', component: home, name:'home', meta: {auth: false, title:'MundoParis | Home'} },
  { path: '/lugares', component: lugares, name:'lugares', meta: {auth:false, title:'MundoParis | Lugares'}},
  { path: '/excursiones', component: excursiones, name: 'excursiones', meta: {auth:false, title: 'MundoParis | Excursiones'}},
  { path: '/restaurantes', component: restaurantes, name: 'restaurantes', meta: {auth:false, title: 'MundoParis | Restaurantes'}},
  { path: '/formulario', component: formulario, name:'formulario', meta: {auth: false, title:'MundoParis | Formulario'} },
  { path: '/gracias', component: gracias, name:'gracias', meta: {auth: false, title:'MundoParis | Gracias'} },
];
const router = new VueRouter({
	  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
});


const app = new Vue({
	el:"#contenedor",
  	router

});


