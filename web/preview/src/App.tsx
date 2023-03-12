import { getProjectById } from "@sillage/request";
import { useEffect, useState } from "react";
import { Render } from "@sillage/render";
import type { JSONPage } from "@sillage/core";

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");
  const [page, setPage] = useState<JSONPage | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    void getProjectById(id)
      .then(
        async (res) =>
          await fetch(res.pageSchemaUrl).then(async (res) => await res.text())
      )
      .then((jsonText) => {
        const page = JSON.parse(jsonText);
        console.log({ page });
        setPage(page);
      });
  }, [id]);
  return page ? <Render page={page} /> : null;
}

export default App;
