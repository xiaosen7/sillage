import React, { useCallback } from "react";
import { DiffAddedIcon, XCircleIcon } from "@primer/octicons-react";
import { isInvalidValue } from "@sillage/utils";
import { type EditorComponentType } from "../types";
import styles from "./List.module.scss";
import type { EditorProps } from "@sillage/props";

interface Props extends EditorProps {
  value?: any[];
  ItemEditor: EditorComponentType;
  defaultValueOnAdd?: any;
}

export default function List({
  ItemEditor,
  value: list = [],
  onChange,
  defaultValueOnAdd = "",
}: Props) {
  const handleChange = useCallback(
    (i: number, newValue: any) => {
      if (isInvalidValue(newValue)) {
        list.splice(i, 1);
      } else {
        list[i] = newValue;
      }

      onChange(list);
    },
    [list, onChange]
  );

  const handleAdd = useCallback(() => {
    onChange([...list, defaultValueOnAdd]);
  }, [defaultValueOnAdd, list, onChange]);

  return (
    <React.Fragment>
      <div className={styles.list}>
        {list.map((value, i) => (
          <span className={styles.list__item} key={i}>
            <ItemEditor value={value} onChange={handleChange.bind(null, i)} />
            <span
              className={styles.list__remove}
              onClick={handleChange.bind(null, i, null)}
            >
              <XCircleIcon />
            </span>
          </span>
        ))}
        <span className={styles.list__add} onClick={handleAdd}>
          <DiffAddedIcon />
        </span>
      </div>
    </React.Fragment>
  );
}
