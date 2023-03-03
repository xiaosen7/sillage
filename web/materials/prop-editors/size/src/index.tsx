import { Dropdown, Button, type MenuProps } from "antd";

export default function Size() {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "small",
    },
    {
      key: "2",
      label: "big",
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <Button>大小</Button>
    </Dropdown>
  );
}
Size.displayName = "大小";
