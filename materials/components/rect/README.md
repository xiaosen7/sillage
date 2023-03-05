# rect

This is a component material named rect.

This project should exist `meta.config.ts` file in the project folder.

This project should exist `src/index.ts` file to export default a react component and export a `Props` class constructor which describes the structure of component pass props which sent by user from editor.

Decorates exported from `@sillage/props` can be use to specify the editor component of prop.

```ts
import { editor, initialValue } from "@sillage/props";

const supportedTypes = ["primary", "secondary", "anchor", "danger"] as const;

export class Props {
  @initialValue("secondary")
  @editor(Select, { options: supportedTypes })
  type: string;
}
```

Finally, the `name` field in meta config will be used to mark the name of this component material.
