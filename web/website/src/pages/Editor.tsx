/* eslint-disable unicorn/filename-case */
import { useKeyPress } from "ahooks";
import classnames from "classnames";
import { useEffect, useRef } from "react";

import { type JSONPage } from "@sillage/core";
import { RenderInEditor, UIContext, UIModel } from "@sillage/editor-core";

import { ComponentList } from "../components/ComponentList";
import { Panel } from "../components/panel";
import { RightTabs } from "../components/right-tabs";
import styles from "./Editor.module.scss";

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
  scriptUrl: `http://127.0.0.1:${
    import.meta.env.SILLAGE_WEBSITE_PORT as string
  }/script.js`,
};

function UIEditor(): JSX.Element {
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

  useKeyPress(["Delete", "backspace"], () => {
    ui.dispatch(UIModel.Actions.DeleteNode);
  });

  // TODO Copy node
  // useKeyPress(["ctrl.c"], () => {
  //   ui.dispatch(UIModel.Actions.DeleteNode);
  // });

  useKeyPress(["uparrow", "leftarrow"], (e) => {
    e.preventDefault();
    ui.dispatch(UIModel.Actions.MoveForwardNode);
  });

  useKeyPress(["downarrow", "rightarrow"], (e) => {
    e.preventDefault();
    ui.dispatch(UIModel.Actions.MoveBackNode);
  });

  // set a timer
  useEffect(() => {
    let timer: any;

    function next() {
      timer = setTimeout(() => {
        const data = ui.toJSON();
        localStorage.setItem("page", JSON.stringify(data, null, 2));
        console.log("saved", data);
        next();
      }, 5000);
    }

    next();

    return () => clearTimeout(timer);
  }, [ui]);

  return (
    <UIContext.Provider value={ui}>
      <section className={styles["ui-editor"]}>
        <aside className={"shadow"}>
          <ComponentList />
        </aside>

        <section className="flex-grow">
          <Panel>
            <RenderInEditor page={ui.page} />
          </Panel>
        </section>

        <aside className={classnames(styles.aside, "shadow", "overflow-auto")}>
          <RightTabs />
        </aside>
      </section>
    </UIContext.Provider>
  );
}

export default UIEditor;
