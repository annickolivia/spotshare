import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/login/LoginView.vue"
import DebutView from "../views/home/DebutView.vue"
import CreeView from "../views/CreeCompte/CreeView.vue"
import EntrerProfil from "../views/EntrerProfil/EntrerProfil.vue"
import AcceuilView from "../views/Acceuil/AcceuilView.vue"
import TestView from "../views/test/test.vue"
import profilView from "../views/profil/ProfilView.vue"
import postView from "../views/postView/PostView.vue"
import RechercheView from "../views/recherche/RechercheView.vue"
import NotifView from "../views/notification/NotifView.vue"
import ParamView from "../views/Parametre/ParamView.vue"
import NewView from "../views/nouvellepub/NewView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test',
      name: 'test',
      component: TestView
    },
    {
      path: '/',
      name: 'home',
      component: DebutView
    },
    {
      path: '/connexion',
      name: 'Connexion',
      component: LoginView
    },
    {
      path: '/creecompte',
      name: 'creecompte',
      component: CreeView
    },
    {
      path: '/entrerprofil',
      name: 'entrerprofil',
      component: EntrerProfil
    },
    {
      path: '/acceuil',
      name: 'acceuil',
      component: AcceuilView
    },
    {
      path: '/profil',
      name: 'profil',
      component: profilView,
    },
    {
      path: '/post',
      name: 'post',
      component: postView,
    },
    {
      path: '/search',
      name: 'search',
      component: RechercheView,
    },
    {
      path: '/notification',
      name: 'notification',
      component: NotifView,
    },
    {
      path: '/param',
      name: 'parametre',
      component: ParamView,
    },
    {
      path: '/NouvellePub',
      name: 'Newpub',
      component: NewView,
    },

  ]
})

export default router
