import { createBrowserRouter } from "react-router-dom";
import React, { lazy } from "react";
import Layout from "./components/Layout";

const LaziedEditor = lazy(async () => await import("./pages/Editor"));
const LaziedCodeless = lazy(async () => await import("./pages/Codeless"));

export const router: any = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/editor",
        element: (
          <React.Suspense fallback={<h1>loading...</h1>}>
            <LaziedEditor />
          </React.Suspense>
        ),
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
