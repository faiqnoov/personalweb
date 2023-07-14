import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import Overview from '../views/Overview.vue'
import Skills from '../views/Skills.vue'
import Portfolio from '../views/Portfolio.vue'
import PortfolioDetail from '../views/PortfolioDetail.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/overview',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/portfolio/detail/:id',
    name: 'PortfolioDetail',
    component: PortfolioDetail,
    props: true,  // mengizinkan route params dipakai sebagai prop pada component
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router