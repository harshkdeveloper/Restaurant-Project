import HomePage from './components/Home'
import SignUp from './components/SignUp'
import UpdateView from './components/Update'
import AddView from './components/Add'
import LoginPage from './components/Login'
import { createRouter,createWebHistory } from 'vue-router'
const routes=[
   {
    name:'HomePage',
    component:HomePage,
    path:'/'

},
{
    name:'SignUp',
    component:SignUp,
    path:'/signup'
},
{
    name:'LoginPage',
    component:LoginPage,
    path:'/login'
},
{
    name:'AddView',
    component:AddView,
    path:'/add'

},
{
    name:'UpdateView',
    component:UpdateView,
    path:'/update/:id'

},]
const router =createRouter({
    history:createWebHistory(),
    routes
})
export default router