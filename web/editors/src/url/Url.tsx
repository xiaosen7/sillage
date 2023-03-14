import { UploadIcon } from "@primer/octicons-react";
import { Upload, type UploadProps, message } from "antd";
import { type EditorProps } from "@sillage/props";
import { useId } from "react";
import { genId, getFileExtName } from "@sillage/utils";
import { createClient } from "@sillage/oss";

export default function Url({
  onChange,
  value,
  ...antdUploadProps
}: EditorProps & Pick<UploadProps, "accept">) {
  const uid = useId();

  const uploadProps: UploadProps = {
    showUploadList: {
      // showPreviewIcon: false,
    },
    customRequest({ file, onError }) {
      if (typeof file === "string") {
        return onChange(file);
      }

      if (!("name" in file)) {
        void message.error("unsupported type");
        return;
      }

      createClient()
        .then(
          async (client) =>
            await client.put(
              `upload/${genId()}${getFileExtName(file.name)}`,
              file
            )
        )
        .then(({ url }) => {
          onChange(url);
        }, onError);
    },
    listType: "picture-card",
    multiple: false,
    fileList: value
      ? [
          {
            uid,
            name: uid,
            url: value,
          },
        ]
      : [],
    onChange(info) {
      const { fileList } = info;
      if (fileList.length === 0) {
        onChange("");
      }
    },
    ...antdUploadProps,
    // accept: "image/*",
  };

  return <Upload {...uploadProps}>{!value && <UploadIcon />}</Upload>;
}
