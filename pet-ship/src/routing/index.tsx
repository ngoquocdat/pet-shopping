import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Login } from "../pages/Login";
// import { Home } from "../pages/Home";
// import { Products } from "../pages/products/Products";
// import { ProductDetails } from "../pages/products/ProductDetails";
// import { UnderMaintain } from '../pages/UnderMaintain';
// import { LayoutComponent } from "../pages/LayoutComponent";

const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      let { Layout } = await import("../pages/LayoutComponent");
      return { Component: Layout };
    },
    children: [
      // Main route:
      {
        index: true,
        async lazy() {
          let { Home } = await import("../pages/Home");
          return { Component: Home };
        },
      },
      // Sub routes:
      {
        path: "products",
        async lazy() {
          let { Products } = await import("../pages/products/Products");
          return { Component: Products };
        },
        loader: async () => {
          // Fetch data:
          return null;
        },
      },
      {
        path: "product/:id",
        async lazy() {
          let { ProductDetails } = await import(
            "../pages/products/ProductDetails"
          );
          return { Component: ProductDetails };
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
