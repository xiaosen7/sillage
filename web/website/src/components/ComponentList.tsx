import { useMemo } from "react";

import {
  Draggable,
  type Material,
  Materials,
  Node,
  RenderComponent,
  Wrapped,
} from "@sillage/core";

import styles from "./componentList.module.scss";

function RenderMaterial({ material }: { material: Material }) {
  const node = useMemo(() => Node.fromMaterial(material), [material]);
  return (
    <Draggable node={node}>
      <Wrapped node={node}>
        <>
          <RenderComponent node={node} />
        </>
      </Wrapped>
    </Draggable>
  );
}

export function ComponentList(): JSX.Element {
  return (
    <ul className={styles["component-list"]}>
      {Materials.get().map((material, name) => {
        if (material.isInternal()) {
          return null;
        }

        return (
          <li
            key={name}
            className={`${styles["component-list__item"]} shadow self-stretch justify-self-stretch`}
          >
            <header>
              <RenderMaterial material={material} />
            </header>
            <footer>{name}</footer>
          </li>
        );
      })}
    </ul>
  );
}
