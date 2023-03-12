import {
  CodeRunner,
  type JSONPage,
  Locatable,
  type Node,
  Page,
  RenderComponent,
  Styled,
  Wrapped,
  useSubscribe,
} from "@sillage/core";
import { useEffect, useMemo } from "react";
import { message } from "antd";

export function Render({ page }: { page: Page | JSONPage }) {
  const pageObject = useMemo(
    () => (page instanceof Page ? page : new Page(page)),
    [page]
  );

  const node = pageObject.root;

  useSubscribe(pageObject, Page.Topic.UpdateCompiledScript, (url: string) => {
    runScriptUrl(url, pageObject);
  });

  useEffect(() => {
    const url = pageObject.getCompiledScriptUrl();
    if (url) {
      runScriptUrl(url, pageObject);
    }
  }, [pageObject]);

  return <NodeRender node={node} />;
}

function runScriptUrl(url: string, pageObject: Page) {
  fetch(url)
    .then(async (res) => await res.text())
    .then((source) => {
      const moduleMap = {
        jquery: {},
      };
      const codeRunner = new CodeRunner(source, moduleMap, pageObject.root);
      codeRunner.run();
    })
    .catch((error: string) => {
      void message.error(`runtime error: ${error.toString()}`);
    });
}

export function NodeRender({ node }: { node: Node }) {
  return (
    <Locatable node={node}>
      <Styled node={node}>
        <Wrapped node={node}>
          <RenderComponent ChildRender={NodeRender} node={node} />
        </Wrapped>
      </Styled>
    </Locatable>
  );
}
