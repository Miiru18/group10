import { createRouter } from "vue-router";
import StudentList from "@/components/StudentList.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      name: "StudentList",
      component: StudentList,
    },
  ],
});

export default router