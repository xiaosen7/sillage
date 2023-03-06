import { type FunctionComponent } from "react";
import type React from "react";
import { isValidElement, useCallback } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/src/styles/styles.scss";
import * as Icons from "@primer/octicons-react";
import { type Props } from "./props";

export function Button(props: Props) {
  const { href, before, onMouseUp, ...awesomeButtonProps } = props;

  const handleMouseUp = useCallback(
    (event: React.MouseEvent | React.TouchEvent<Element>) => {
      if (href) {
        window.open(href);
      }

      if (onMouseUp) {
        onMouseUp(event);
      }
    },
    [href, onMouseUp]
  );

  const BeforeIcon = Reflect.get(Icons, before) as FunctionComponent;

  return (
    <>
      <AwesomeButton
        before={BeforeIcon ? <BeforeIcon key={before} /> : null}
        onMouseUp={handleMouseUp}
        {...awesomeButtonProps}
      >
        {props.text}
      </AwesomeButton>
      {/* <AwesomeButton type="secondary">Secondary</AwesomeButton>
      <AwesomeButton type="anchor">Anchor</AwesomeButton>
      <AwesomeButton type="danger">Danger</AwesomeButton>
      <AwesomeButton disabled={true}>Disabled</AwesomeButton> */}
    </>
  );
}
