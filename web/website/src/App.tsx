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
      isContainer: false,
      children: [],
      passProps: {
        style: { width: "100px", height: "100px" },
      },
      id: "rect",
      position: [0, 0],
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
  layoutType: "free",
};

function App(): JSX.Element {
  const uiRef = useRef<UIModel>();
  if (!uiRef.current) {
    // const saved = localStorage.getItem("json");
    const saved = null;
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
