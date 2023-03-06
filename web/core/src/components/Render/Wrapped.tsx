import React, { type ReactElement, useEffect, useRef } from "react";
import mergeProps from "merge-props";
import { type Node } from "../../models";

export function Wrapped({
  innerWrapperProps = {},
  outerWrapperProps = {},
  children,
  node,
}: {
  outerWrapperProps?: any;
  innerWrapperProps?: any;
  children: ReactElement;
  node: Node;
}) {
  const mountPoint = useRef<HTMLDivElement>();
  useEffect(() => {
    if (mountPoint.current) {
      node.setMountPoint(mountPoint.current);
    }
  }, [node]);

  outerWrapperProps = mergeProps(outerWrapperProps, {
    className: "outer-wrapper",
  });

  innerWrapperProps = mergeProps(innerWrapperProps, {
    className: "inner-wrapper",
  });

  console.log({ outerWrapperProps, innerWrapperProps });
  return (
    <div {...outerWrapperProps}>
      <div ref={mountPoint} {...innerWrapperProps}>
        {React.cloneElement(children, {
          ...children.props,
          ...innerWrapperProps,
        })}
      </div>
    </div>
  );
}
