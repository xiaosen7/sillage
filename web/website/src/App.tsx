import { useKeyPress } from "ahooks";
import classnames from "classnames";
import { useEffect, useRef } from "react";

import {
  type JsonRootNode,
  Materials,
  Node,
  Render,
  UIContext,
  UIModel,
} from "@sillage/core";

import styles from "./app.module.scss";
import { ComponentList } from "./components/ComponentList";
import { Panel } from "./components/panel";
import { RightTabs } from "./components/right-tabs";

// const defaultJsonNode: JsonRootNode = {
//   children: [
//     {
//       name: "rect",
//       isContainer: false,
//       children: [],
//       passProps: {
//         style: { width: "100px", height: "100px" },
//       },
//       id: "rect",
//     },
//   ],
//   isContainer: true,
//   name: "root",
//   passProps: {
//     style: {

//     },
//   },
//   id: "root",
//   layoutType: "free",
// };

const root = Node.fromMaterial(Materials.get().getByName("root")!);

function App(): JSX.Element {
  const uiRef = useRef<UIModel>();
  if (!uiRef.current) {
    const saved = localStorage.getItem("json");
    // const saved = null;
    uiRef.current = new UIModel(
      saved ? (JSON.parse(saved) as JsonRootNode) : root
    );
  }

  const ui = uiRef.current;

  useKeyPress(["Delete"], () => {
    ui.dispatch(UIModel.Actions.DeleteNode);
  });

  useKeyPress(["ctrl.c"], () => {
    ui.dispatch(UIModel.Actions.DeleteNode);
  });

  useEffect(() => {
    let timer: any;

    function next() {
      timer = setTimeout(() => {
        const data = ui.root.toJSON();
        localStorage.setItem("json", JSON.stringify(data, null, 2));
        console.log("saved", data);
        next();
      }, 5000);
    }

    next();

    return () => clearTimeout(timer);
  }, [ui]);

  return (
    <UIContext.Provider value={ui}>
      <main className="flex h-screen">
        <aside className={"shadow"}>
          <ComponentList />
        </aside>

        <section className="flex-grow">
          <Panel>
            <Render node={ui.root} />
          </Panel>
        </section>

        <aside className={classnames(styles.aside, "shadow", "overflow-auto")}>
          <RightTabs />
        </aside>
      </main>
    </UIContext.Provider>
  );
}

export default App;
