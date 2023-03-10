import { useRef, useState } from "react";
import { HexAlphaColorPicker } from "react-colorful";
import { useClickAway } from "ahooks";
import styles from "./Color.module.scss";
import type { EditorProps } from "@sillage/props";

export const Color = ({ value, onChange }: EditorProps) => {
  const popover = useRef<HTMLDivElement>(null);
  const [isOpen, toggle] = useState(false);

  useClickAway(() => toggle(false), popover);

  return (
    <div className={styles.picker}>
      <div
        className={styles.swatch}
        style={{ backgroundColor: value }}
        onClick={(e) => {
          e.stopPropagation();
          toggle(true);
        }}
      />

      {isOpen && (
        <div className={styles.popover} ref={popover}>
          <HexAlphaColorPicker color={value} onChange={onChange} />
        </div>
      )}
    </div>
  );
};
