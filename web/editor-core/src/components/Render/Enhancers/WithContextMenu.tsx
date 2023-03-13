import React, { useCallback } from "react";
import { Item, Menu, useContextMenu } from "react-contexify";
import mergeProps from "merge-props";

import "react-contexify/dist/ReactContexify.css";
import { useUIContext } from "../../../UIContext";
import { UIModel } from "../../../UIModel";
import { type EnhancerProps } from "./types";

export function WithContextMenu(props: EnhancerProps) {
  const ui = useUIContext();
  const { show } = useContextMenu({
    id: "contextMenu",
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
  const { hideAll } = useContextMenu({
    id: "contextMenu",
  });
  const deleteNode = useCallback(() => {
    // eslint-disable-next-line react/prop-types
    const node = ui.getActiveNode();
    if (node) {
      ui.dispatch(UIModel.Actions.DeleteNode, node);
    }

    hideAll();
  }, [hideAll, ui]);

  const copy = useCallback(() => {
    ui.emit(UIModel.Topic.Copy);
  }, [ui]);

  return (
    <Menu animation="scale" id={"contextMenu"}>
      <Item onClick={deleteNode}>delete</Item>
      <Item onClick={copy}>copy</Item>
    </Menu>
  );
}
