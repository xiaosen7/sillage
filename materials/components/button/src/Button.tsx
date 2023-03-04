import { type PropsWithChildren } from "react";
import { AwesomeButton } from "react-awesome-button/";
import "react-awesome-button/dist/styles.css";
import { type Props } from "./props";

export function Button(props: PropsWithChildren<Props>) {
  console.log(props);
  return (
    <>
      <AwesomeButton {...props}>{props.children ?? "Button"}</AwesomeButton>
      {/* <AwesomeButton type="secondary">Secondary</AwesomeButton>
      <AwesomeButton type="anchor">Anchor</AwesomeButton>
      <AwesomeButton type="danger">Danger</AwesomeButton>
      <AwesomeButton disabled={true}>Disabled</AwesomeButton> */}
    </>
  );
}
