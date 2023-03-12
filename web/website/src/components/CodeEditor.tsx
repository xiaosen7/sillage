import { useCallback, useEffect, useRef } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import styles from "./CodeEditor.module.scss";
import "./CodeEditorWorkers";
import { useKeyPress } from "ahooks";
import { message } from "antd";
import { useUIContext } from "@sillage/editor-core";
import { compileCode, putCompiledScript, putScript } from "@sillage/request";
import coreDeclaration from "@sillage/core/dist/core.d.ts?raw";
import templateCode from "./__template__?raw";

const model = monaco.editor.createModel(
  templateCode,
  "typescript",
  monaco.Uri.parse("file:///index.ts")
);

export const CodeEditor = () => {
  const ui = useUIContext();
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();

  // monaco
  useEffect(() => {
    // compiler options
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ESNext,
      allowNonTsExtensions: true,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      module: monaco.languages.typescript.ModuleKind.ESNext,
      noEmit: true,
    });

    // extra libraries
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      coreDeclaration,
      "file:///node_modules/@sillage/core/index.d.ts"
    );
  }, []);

  // save
  useKeyPress(["ctrl.s", "meta.s"], (e) => {
    e.preventDefault();

    const source = editorRef.current?.getValue();
    if (!source) {
      return;
    }

    const id = ui.page.id;

    // 1. compile code to get compiled content
    compileCode({
      content: source,
      format: "cjs",
    })
      .then(async ({ content: compiled }) => {
        const tasks: Array<Promise<any>> = [
          // 2. put source code to oss to save source code
          putScript(id, source).then(({ url: scriptUrl }) => scriptUrl),

          // 3. put compiled code to oss to save compiled code
          putCompiledScript(id, compiled).then(
            ({ url: compiledScriptUrl }) => compiledScriptUrl
          ),
        ];

        return await Promise.all(tasks);
      })
      // 4. update page.scriptUrl and page.compiledScriptUrl
      .then(([scriptUrl, compiledScriptUrl]) => {
        ui.page.setScriptUrl(scriptUrl);
        ui.page.setCompiledScriptUrl(compiledScriptUrl);
        void message.success("compiled successfully");
      })
      .catch((error: string) => {
        void message.error(`compiled error: ${error.toString()}`);
      });
  });

  const handleEditorOnMount = useCallback(
    (editor: monaco.editor.IStandaloneCodeEditor) => {
      editorRef.current = editor;

      const scriptUrl = ui.page.getScriptUrl();
      if (scriptUrl) {
        fetch(scriptUrl)
          .then(async (res) => await res.text())
          .then((source) => {
            editor.setValue(source);
          })
          .catch((error) => {
            void message.error(error);
          });
      }
    },
    [ui.page]
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
