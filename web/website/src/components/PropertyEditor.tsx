import { useCallback, useMemo } from "react";
import { Materials, type Node } from "@sillage/core";
import { getEditor } from "@sillage/props";

export function PropertyEditor({ node }: { node: Node }) {
  const material = useMemo(
    () => Materials.get().getByName(node.getName()),
    [node]
  );

  const handleChange = useCallback(
    (prop: string, value: any) => {
      node.setPassProp(prop, value);
    },
    [node]
  );

  if (!material) {
    return null;
  }

  const { Props } = material;
  const passProps = node.getPassProps();
  return (
    <>
      {Object.keys(Props).map((prop) => {
        const PropEditor = getEditor(Props, prop);
        if (!PropEditor) {
          return null;
        }

        const value = passProps[prop];

        return (
          <PropEditor
            onChange={(value: any) => handleChange(prop, value)}
            key={prop}
            value={value}
          />
        );
      })}
    </>
  );
}
