import { NavLink, Outlet } from "react-router-dom";
import classnames from "classnames";
import { type Mode, env } from "@sillage/env";
import { useUIContext } from "@sillage/editor-core";
import { MarkGithubIcon } from "@primer/octicons-react";
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
        <h1 className="select-none">
          <NavLink datatype="ignoreActive" to={"/"}>
            sillage
          </NavLink>
        </h1>
        <nav className="gap-3 flex">
          <NavLink className="self-center" to={"/"}>
            Editor
          </NavLink>
          <NavLink className="self-center" to={"/codeless"}>
            Codeless
          </NavLink>
          <NavLink
            className="self-center"
            target={"_blank"}
            to={`${previewUrl}?id=${ui.page.id}`}
          >
            Preview
          </NavLink>

          <NavLink
            className="self-center"
            target={"_blank"}
            to={"https://github.com/xiaosen7/sillage"}
          >
            <MarkGithubIcon size={18} />
          </NavLink>

          {/* <AwesomeButtonSocial
            type="github"
            // href="https://github.com/xiaosen7/sillage"
            onPress={() =>
              window.open("https://github.com/xiaosen7/sillage", "_blank")
            }
          >
            {" "}
          </AwesomeButtonSocial> */}
        </nav>
      </header>

      <main className={styles.layout__main}>
        <Outlet />
      </main>
    </section>
  );
}
