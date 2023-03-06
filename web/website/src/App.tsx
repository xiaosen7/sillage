import classnames from "classnames";
import { useEffect, useRef } from "react";
import { type JsonRootNode, Render, UIContext, UIModel } from "@sillage/core";
import { ComponentList } from "./components/ComponentList";
import { RightTabs } from "./components/right-tabs";
import styles from "./app.module.scss";
import { Panel } from "./components/panel";

const defaultJsonNode: JsonRootNode = {
  children: [
    {
      name: "rect",
      isContainer: true,
      children: [
        // {
        //   name: "button",
        //   isContainer: true,
        //   children: [],
        //   passProps: {},
        //   id: "button",
        //   position: [50, 50],
        // },
      ],
      passProps: {
        width: 100,
        height: 100,
      },
      id: "rect",
      position: [0, 0],
      style: {},
    },
  ],
  isContainer: true,
  name: "root",
  passProps: {
    // iphone 12
    width: 390,
    height: 844,
  },
  position: [0, 0],
  id: "root",
  style: {},
};

function App(): JSX.Element {
  const uiRef = useRef<UIModel>();
  if (!uiRef.current) {
    const saved = localStorage.getItem("json");
    uiRef.current = new UIModel(
      saved ? (JSON.parse(saved) as JsonRootNode) : defaultJsonNode
    );
  }

  const ui = uiRef.current;

  useEffect(() => {
    ui.setupHotKeysEventListeners();
  }, [ui]);

  useEffect(() => {
    let timer: any;

    function start() {
      const data = ui.root.toJSON();
      localStorage.setItem("json", JSON.stringify(data, null, 2));
      console.log("saved", data);
      timer = setTimeout(start, 2000);
    }

    start();

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

        <aside className={classnames(styles.aside, "shadow")}>
          <RightTabs />
        </aside>
      </main>
    </UIContext.Provider>
  );
}

export default App;
