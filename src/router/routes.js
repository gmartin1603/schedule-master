const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/SchedulePage.vue") },
      {
        path: "/dashboard",
        component: () => import("pages/DashboardPage.vue"),
      },
    ],
  },

  // Always leave this as last one
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
