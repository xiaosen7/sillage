import { NavLink, Outlet } from "react-router-dom";
import classnames from "classnames";
import { type Mode, env } from "@sillage/env";
import { useUIContext } from "@sillage/editor-core";
import styles from "./Layout.module.scss";

const previewUrl = env[import.meta.env.MODE as Mode].previewUrl;

export default function Layout() {
  const ui = useUIContext();

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
          <NavLink to={"/"}>Editor</NavLink>
          <NavLink to={"/codeless"}>Codeless</NavLink>
          <NavLink target={"_blank"} to={`${previewUrl}?id=${ui.page.id}`}>
            Preview
          </NavLink>
        </nav>
      </header>

      <main className={styles.layout__main}>
        <Outlet />
      </main>
    </section>
  );
}
