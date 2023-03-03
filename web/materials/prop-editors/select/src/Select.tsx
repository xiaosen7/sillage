import ReactSelect from "react-select";
import { type PropsWithPropValue } from "@sillage/props";
import type { Props as ReactSelectProps } from "react-select";

export function Select(props: PropsWithPropValue<ReactSelectProps>) {
  console.log("Select props", props);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return <ReactSelect options={options} />;
}
