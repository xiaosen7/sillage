import { useUIContext } from "@sillage/editor-core";
import { Render } from "@sillage/render";
import classNames from "classnames";
import { CodeEditor } from "../components/CodeEditor";
import styles from "./Codeless.module.scss";

export default function Codeless() {
  const ui = useUIContext();
  return (
    <section className={styles.codeLess}>
      <div className={styles.codeLess__left}>
        <CodeEditor />
      </div>
      <div className={classNames([styles.codeLess__right, "shadow"])}>
        <Render page={ui.page} />
      </div>
    </section>
  );
}
