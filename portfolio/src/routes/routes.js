import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import AboutMe from "@/pages/AboutMe.vue";
import Projects from "@/pages/Projects.vue";
import Contact from "@/pages/Contact.vue";
import Resume from "@/pages/Resume.vue";
import BeYourOwnTherapist from "@/pages/BeYourOwnTherapist.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/aboutme",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "beyourowntherapist",
        name: "BE YOUR OWN THERAPIST",
        component: BeYourOwnTherapist
      },
      {
        path: "aboutme",
        name: "ABOUT ME",
        component: AboutMe
      },
      {
        path: "projects",
        name: "PROJECTS",
        component: Projects
      },
      {
        path: "resume",
        name: "RESUME",
        component: Resume
      },
      {
        path: "contact",
        name: "GET IN TOUCH",
        component: Contact
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO
      }
    ]
  }
];

export default routes;
