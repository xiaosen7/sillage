import { InputNumber, Select } from "antd";
import { useCallback, useEffect, useRef } from "react";

import type { EditorProps } from "@sillage/props";

interface Props extends EditorProps {
  value?: string | number;
}

const units = ["px", "%", "rem", "em"] as const;

export function InputCssLength(props: Props) {
  const { number, unit } = getNumberAndSuffix(props.value);
  const ref = useRef<HTMLInputElement | null>(null);

  const selectAfter = (
    <Select
      onChange={(value) => handleChange(number, value)}
      value={unit}
      style={{ width: 60 }}
    >
      {units.map((u) => (
        <Select.Option key={u} value={u}>
          {u}
        </Select.Option>
      ))}
    </Select>
  );

  const handleChange = useCallback(
    (number: number | undefined, unit: string) => {
      if (typeof number !== "number") {
        props.onChange("");
        return;
      }

      props.onChange(number.toString() + unit);
    },
    [props]
  );

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();

      const dy = e.deltaY;
      if (dy > 0) {
        handleChange((typeof number === "number" ? number : 0) - 1, unit);
      } else {
        handleChange((typeof number === "number" ? number : 0) + 1, unit);
      }
    },
    [handleChange, number, unit]
  );

  useEffect(() => {
    const input = ref.current;
    if (input) {
      input.addEventListener("wheel", handleWheel);
      return () => input.removeEventListener("wheel", handleWheel);
    }
  }, [handleChange, handleWheel, number, unit]);

  return (
    <InputNumber
      ref={ref}
      onChange={(value) => handleChange(value as any, unit)}
      addonAfter={selectAfter}
      value={number === undefined ? null : number}
    />
  );
}

function getNumberAndSuffix(value: string | number | undefined): {
  number: number | undefined;
  unit: (typeof units)[number];
} {
  const inValidResult = { number: undefined as any, unit: "px" } as const;

  if (value === undefined) {
    return inValidResult;
  }

  const stringValue = value.toString();
  const match = stringValue.match(/(\d+)(px|rem|%|em)/);
  if (!match) {
    return {
      number: typeof value === "number" ? Math.round(value) : undefined,
      unit: "px",
    };
  }

  return { number: Number(match[1]), unit: match[2] as any };
}
