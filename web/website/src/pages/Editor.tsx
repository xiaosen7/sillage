/* eslint-disable unicorn/filename-case */
import { useKeyPress } from "ahooks";
import classnames from "classnames";

import { RenderInEditor, UIModel, useUIContext } from "@sillage/editor-core";

import { message } from "antd";
import { ComponentList } from "../components/ComponentList";
import { Panel } from "../components/panel";
import { RightTabs } from "../components/right-tabs";
import { savePage } from "../utils";
import styles from "./Editor.module.scss";

function UIEditor(): JSX.Element {
  const ui = useUIContext();

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

  useKeyPress(["ctrl.s", "meta.s"], (e) => {
    e.preventDefault();

    const jsonPage = ui.toJSON();
    savePage(jsonPage)
      .then(() => message.success("save successfully"))
      .catch((error: Error) =>
        message.error(`save error: ${error.toString()}`)
      );
  });

  useKeyPress(["ctrl.c", "meta.c"], (e) => {
    e.preventDefault();
    ui.emit(UIModel.Topic.Copy);
  });

  useKeyPress(["ctrl.v", "meta.v"], (e) => {
    e.preventDefault();
    ui.emit(UIModel.Topic.Paste);
  });

  useKeyPress(
    ["ctrl.z", "meta.z"],
    (e) => {
      e.preventDefault();
      ui.emit(UIModel.Topic.Undo);
    },
    {
      exactMatch: true,
    }
  );

  useKeyPress(
    ["ctrl.shift.z", "meta.shift.z"],
    (e) => {
      e.preventDefault();
      ui.emit(UIModel.Topic.Redo);
    },
    { exactMatch: true }
  );

  return (
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
  );
}

export default UIEditor;
