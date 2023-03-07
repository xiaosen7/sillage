import React, { type ReactElement, useEffect, useRef } from "react";
import mergeProps from "merge-props";
import { type Node } from "../../models";

export function Wrapped({
  innerWrapperProps = {},
  children,
  node,
}: {
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

  innerWrapperProps = mergeProps(innerWrapperProps, {
    className: `relative component__wrapper component__${node.getName()}`,
  });

  return (
    <span ref={mountPoint} {...innerWrapperProps}>
      {React.cloneElement(children, {
        ...children.props,
      })}
    </span>
  );
}
