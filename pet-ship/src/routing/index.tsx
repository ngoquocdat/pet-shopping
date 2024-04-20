import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      let { Layout } = await import("../pages/Layout");
      return { Component: Layout };
    },
    children: [
      // Main route:
      {
        index: true,
        async lazy() {
          let { Vehicles } = await import("../pages/Vehicles");
          return { Component: Vehicles };
        },
      },
      // Sub routes:
      {
        path: "type/:type",
        async lazy() {
          let { VehicleTypes } = await import("../pages/products/VehicleTypes");
          return { Component: VehicleTypes };
        },
        loader: async ({ params }) => {
          // Fetch data:
          return params;
        },
      },
      {
        path: "product/:id",
        async lazy() {
          let { VehicleDetails } = await import(
            "../pages/products/VehicleDetails"
          );
          return { Component: VehicleDetails };
        },
        loader: async ({ params }) => {
          // Fetch data:
          return {
            id: params.id,
          };
        },
      },
    ],
  },
  {
    path: "/login",
    async lazy() {
      let { Login } = await import("../pages/Login");
      return { Component: Login };
    },
  },
  {
    path: "*",
    async lazy() {
      let { UnderMaintain } = await import("../pages/UnderMaintain");
      return { Component: UnderMaintain };
    },
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
