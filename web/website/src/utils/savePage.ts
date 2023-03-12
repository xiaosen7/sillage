import { type JSONPage } from "@sillage/core";
import { putText } from "@sillage/oss";
import * as request from "@sillage/request";

export async function savePage(jsonPage: JSONPage) {
  return await putText(`/page/${jsonPage.id}`, JSON.stringify(jsonPage))
    .then(
      async ({ url }) =>
        await request.saveProject({
          id: jsonPage.id,
          pageSchemaUrl: url,
        })
    )
    .then(() => {
      localStorage.setItem("page", JSON.stringify(jsonPage, null, 2));
    });
}
