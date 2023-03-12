import React, { useCallback } from "react";
import { Item, Menu, useContextMenu } from "react-contexify";
import mergeProps from "merge-props";

import "react-contexify/dist/ReactContexify.css";
import { useSubscribe } from "@sillage/core";
import { useUIContext } from "../../../UIContext";
import { UIModel } from "../../../UIModel";
import { type EnhancerProps } from "./types";

export function WithContextMenu(props: EnhancerProps) {
  const ui = useUIContext();
  const { show, hideAll } = useContextMenu({
    id: "contextMenu",
  });

  useSubscribe(ui, UIModel.Topic.ActiveNodeChange, () => {
    hideAll();
  });

  const displayMenu = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      ui.emit(UIModel.Topic.ActiveNode, props.node);
      show({
        event: e,
      });
    },
    [props.node, show, ui]
  );

  const innerWrapperProps = mergeProps(props.innerWrapperProps, {
    onContextMenu: displayMenu,
  });

  return React.cloneElement(props.children, {
    ...props.children.props,
    ...props,
    innerWrapperProps,
  });
}

export function ContextMenu() {
  const ui = useUIContext();
  const deleteNode = useCallback(() => {
    // eslint-disable-next-line react/prop-types
    const node = ui.getActiveNode();
    if (node) {
      ui.dispatch(UIModel.Actions.DeleteNode, node);
    }
  }, [ui]);

  return (
    <Menu animation="scale" id={"contextMenu"}>
      <Item onClick={deleteNode}>delete</Item>
    </Menu>
  );
}
