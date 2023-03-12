import { Input, Modal, Tooltip } from "antd";
import { useCallback, useState } from "react";

import { Button } from "@sillage/materials";
import { capitalCase } from "change-case";
import * as Icons from "@primer/octicons-react";
import styles from "./icon.module.scss";
import type { EditorProps } from "@sillage/props";
import type React from "react";

interface Props extends EditorProps {
  value: string;
}

export default function Icon(props: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const data = buildDataSource();

  const changeIcon = useCallback(
    (name: string) => {
      props.onChange(name);
      handleCancel();
    },
    [props]
  );

  return (
    <div>
      <Button
        before={props.value}
        type="secondary"
        text={props.value ? capitalCase(props.value) : "choose an icon"}
        onMouseUp={showModal}
      />
      <Modal
        title="Please choose an icon"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Input
          className="mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search icon"
          autoFocus
        />

        <ul className={styles["icon-list"]}>
          {data.filter(makeFilter(search)).map(({ name, Icon, title }) => {
            return (
              <li
                onClick={() => changeIcon(name)}
                key={name}
                className={styles["icon-list__item"]}
              >
                <Tooltip title={title}>
                  <span>
                    <Icon />
                  </span>
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </Modal>
    </div>
  );
}

function buildDataSource() {
  const ret = [] as Array<{
    name: string;
    Icon: React.FunctionComponent;
    title: string;
  }>;
  for (const [name, Icon] of Object.entries(Icons)) {
    if (!name.endsWith("Icon")) {
      continue;
    }

    ret.push({
      title: capitalCase(name),
      Icon,
      name,
    });
  }

  return ret;
}

function makeFilter(search: string) {
  const reg = new RegExp(search, "i");
  return ({ title }: { title: string }) => {
    return reg.test(title);
  };
}
