import { createHashRouter } from "react-router-dom";
import React, { lazy } from "react";
import Layout from "./components/Layout";

const LaziedEditor = lazy(async () => await import("./pages/Editor"));
const LaziedCodeless = lazy(async () => await import("./pages/Codeless"));

export const router: any = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense fallback={<h1>loading...</h1>}>
            <LaziedEditor />
          </React.Suspense>
        ),
        index: true,
      },
      {
        path: "/codeless",
        element: (
          <React.Suspense fallback={<h1>loading...</h1>}>
            <LaziedCodeless />
          </React.Suspense>
        ),
      },
    ],
  },
]);
