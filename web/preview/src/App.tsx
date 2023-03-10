import { Node, Render } from "@sillage/core";

import rootJson from "./root.json";

const root = new Node(rootJson as any);

function App() {
  return <Render node={root} />;
}

export default App;
