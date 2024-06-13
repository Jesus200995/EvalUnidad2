import { createRouter, createWebHistory } from 'vue-router';
import RegisterUser from '@/components/registerUser.vue';
import LoginView from '@/components/login.vue';
import Dashboard from '@/components/dashboard.vue';
import Usuario from '@/components/usuario.vue';
import Personas from '@/components/personas.vue';
import PersonalMedico from '@/components/personalMedico.vue';
import piePagina from '@/components/piePagina.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterUser
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [
      { path: '/personas', name: 'personas', component: Personas },
      { path: '/personalMedico', name: 'personalMedico', component: PersonalMedico }
    ]
  },
  {
    path: '/usuario',
    name: 'Usuario',
    component: Usuario
  },
  {
    path: '/personas',
    name: 'Personas',
    component: Personas
  },
  {
    path: '/piePagina',
    name: 'piePagina',
    component: piePagina
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach(() => {
  // Scroll to the top of the page on navigation
  window.scrollTo(0, 0);
});

export default router;
