import { UploadIcon } from "@primer/octicons-react";
import { Upload, type UploadProps } from "antd";
import { type EditorProps } from "@sillage/props";
import { useId } from "react";
import { getClient } from "./getClient";

export default function ImageUrl(props: EditorProps) {
  const uid = useId();

  const uploadProps: UploadProps = {
    showUploadList: {
      showPreviewIcon: false,
    },
    customRequest({ file, onError }) {
      getClient()
        .then(async (client) => await client.put(`images/${uid}`, file))
        .then(({ url }) => {
          props.onChange(url);
        }, onError);
    },
    listType: "picture-card",
    multiple: false,
    fileList: props.value
      ? [
          {
            uid,
            name: uid,
            url: props.value,
          },
        ]
      : [],
    onChange(info) {
      const { fileList } = info;
      if (fileList.length === 0) {
        props.onChange("");
      }
    },
  };

  return <Upload {...uploadProps}>{!props.value && <UploadIcon />}</Upload>;
}
