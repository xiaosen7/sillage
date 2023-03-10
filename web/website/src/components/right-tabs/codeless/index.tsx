import { type Node } from "@sillage/core";
import { Descriptions, Input } from "antd";
import React from "react";

interface CodeLessProps {
  node: Node;
}

export function CodeLess({ node }: CodeLessProps) {
  const handleIdChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      node.setName(e.target.value);
    },
    [node]
  );
  return (
    <Descriptions column={1} bordered>
      <Descriptions.Item key="name" label="name">
        <Input onChange={handleIdChange} />
      </Descriptions.Item>
    </Descriptions>
  );
}
