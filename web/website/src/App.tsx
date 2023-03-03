import classnames from "classnames";
import * as components from "virtual:material-components";
import { ComponentList } from "./components/ComponentList";
import { RightTabs } from "./components/RightTabs";
import styles from "./app.module.scss";
import { Panel } from "./components/Panel";

console.log({ components });

function App(): JSX.Element {
  return (
    <main className="flex h-screen">
      <aside className={classnames(styles.aside, "shadow")}>
        <ComponentList />
      </aside>

      <section className="flex-grow">
        <Panel />
      </section>

      <aside className={classnames(styles.aside, "shadow")}>
        <RightTabs />
      </aside>
    </main>
  );
}

export default App;
