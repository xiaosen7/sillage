import { type JSONPage } from "@sillage/core";
import { UIContext, UIModel } from "@sillage/editor-core";
import { useRef } from "react";
import { RouterProvider } from "react-router-dom";
import * as uuid from "uuid";
import { router } from "./router";

const defaultPage: JSONPage = {
  root: {
    componentName: "Root",
    isContainer: true,
    children: [],
    layoutType: "free",
    passProps: {
      style: {
        background: "white",
        cursor: "default",
        // iphone 12
        width: 390,
        height: 844,
      },
    },
    id: "Root",
  },
  id: uuid.v4(),
};

function App() {
  const uiRef = useRef<UIModel>();
  if (!uiRef.current) {
    const jsonPage = localStorage.getItem("page");
    if (jsonPage) {
      const page = JSON.parse(jsonPage) as JSONPage;
      uiRef.current = new UIModel(page);
      console.log("reloaded from localStorage", page);
    } else {
      uiRef.current = new UIModel(defaultPage);
    }
  }

  const ui = uiRef.current;

  return (
    <UIContext.Provider value={ui}>
      <RouterProvider router={router} />
    </UIContext.Provider>
  );
}

export default App;
