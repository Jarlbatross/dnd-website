import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogView from '../views/LogView.vue'
import MonstersView from '../views/MonstersView.vue'
import NPCView from '../views/NPCView.vue'
import PCView from '../views/PCView.vue'
import RulesView from '../views/RulesView.vue'
import SpellsView from '../views/SpellsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/log',
    name: 'log',
    component: LogView
  },
  {
    path: '/monsters',
    name: 'monsters',
    component: MonstersView
  },
  {
    path: '/rules',
    name: 'rules',
    component: RulesView
  },
  {
    path: '/spells',
    name: 'spells',
    component: SpellsView
  },
  {
    path: '/npc',
    name: 'npc',
    component: NPCView
  },
  {
    path: '/pc',
    name: 'pc',
    component: PCView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
