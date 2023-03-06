import { InputNumber, Select } from "antd";
import { useMemo } from "react";
import type { EditorProps } from "@sillage/props";

interface Props extends EditorProps {
  value?: string | number;
}

const units = ["px", "%", "rem", "em"] as const;

export function InputCssLength(props: Props) {
  const { number, unit } = getNumberAndSuffix(props.value);

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

  function handleChange(number: number | undefined, unit: string) {
    if (typeof number !== "number") {
      props.onChange("");
      return;
    }

    props.onChange(number.toString() + unit);
  }

  console.log("InputCssLength props", props);
  return (
    <InputNumber
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
    return { number: undefined, unit: "px" };
  }

  return { number: Number(match[1]), unit: match[2] as any };
}
