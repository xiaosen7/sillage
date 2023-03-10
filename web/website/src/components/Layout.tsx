import { NavLink, Outlet } from "react-router-dom";
import classnames from "classnames";
import styles from "./Layout.module.scss";

export default function Layout() {
  return (
    <section className={styles.layout}>
      <header
        className={classnames([
          styles.layout__header,
          "shadow",
          "p-4",
          "pr",
          "pl",
          "flex",
          "justify-between",
        ])}
      >
        <h1>Sillage</h1>
        <nav className="gap-3 flex">
          <NavLink to={"/editor"}>UI editor</NavLink>
          <NavLink to={"/codeless"}>Code editor</NavLink>
        </nav>
      </header>

      <main className={styles.layout__main}>
        <Outlet />
      </main>
    </section>
  );
}
