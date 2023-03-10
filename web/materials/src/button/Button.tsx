import "react-awesome-button/src/styles/styles.scss";
import * as Icons from "@primer/octicons-react";
import { type WithMaterialProps } from "@sillage/props";
import { type FunctionComponent, useCallback } from "react";
import { AwesomeButton } from "react-awesome-button";

import { type Props } from "./Props";
import type React from "react";

export default function Button(props: WithMaterialProps<Props>) {
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

  const BeforeIcon = before
    ? (Reflect.get(Icons, before) as FunctionComponent)
    : undefined;

  return (
    <>
      <AwesomeButton
        before={BeforeIcon ? <BeforeIcon key={before} /> : null}
        onMouseUp={handleMouseUp}
        {...awesomeButtonProps}
      >
        {props.text}
      </AwesomeButton>
    </>
  );
}
