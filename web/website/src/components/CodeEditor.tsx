import { useCallback, useEffect, useRef } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import styles from "./CodeEditor.module.scss";
import "./CodeEditorWorkers";
import { useKeyPress } from "ahooks";
import { message } from "antd";

const model = monaco.editor.createModel(
  `\n`,
  "typescript",
  monaco.Uri.parse("file:///index.ts")
);

export const CodeEditor = () => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  useEffect(() => {
    // 自定义语法提示
    // monaco.languages.typescript.typescriptDefaults.addExtraLib(
    //   "type Context = number",
    //   "file:///index.d.ts"
    // );
  }, []);

  useKeyPress(["ctrl.s", "meta.s"], (e) => {
    e.preventDefault();
    void message.success("saved");
  });

  const handleEditorOnMount = useCallback(
    (editor: monaco.editor.IStandaloneCodeEditor) => {
      editorRef.current = editor;
    },
    []
  );

  return <Editor onMount={handleEditorOnMount} />;
};

function Editor({
  onMount,
}: {
  onMount: (editor: monaco.editor.IStandaloneCodeEditor) => void;
}) {
  const monacoEl = useRef(null);

  useEffect(() => {
    if (monacoEl.current) {
      const editor = monaco.editor.create(monacoEl.current, { model });
      onMount(editor);
      return () => editor.dispose();
    }
  }, [monacoEl, onMount]);

  return <div className={styles.codeEditor} ref={monacoEl}></div>;
}
