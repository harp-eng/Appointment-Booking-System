import Dashboard from "./components/Dashboard.vue";
import Appointment from "./pages/appointments/Appointment.vue";
import User from "./pages/users/User.vue";
import Setting from "./pages/settings/Setting.vue";
import Profile from "./pages/profile/Profile.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        component: Dashboard,
    },{
        path: '/admin/appointment',
        name: 'admin.appointment',
        component: Appointment,
    },{
        path: '/admin/users',
        name: 'admin.users',
        component: User,
    },{
        path: '/admin/settings',
        name: 'admin.settings',
        component: Setting,
    },{
        path: '/admin/profile',
        name: 'admin.profile',
        component: Profile,
    }
]

let router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router;