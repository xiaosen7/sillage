import axios from "axios";
import { type Mode, env } from "@sillage/env";
import { putText } from "@sillage/oss";

const http = axios.create({
  baseURL: env[import.meta.env.MODE as Mode].serverUrl,
});

http.interceptors.response.use((res) => {
  if (res.data.success) {
    return res.data.data;
  }

  return Promise.reject(res.data.message);
});

export async function getProjectById(pageId: string) {
  return await http.get<any, { id: string; pageSchemaUrl: string }>(
    `/project/${pageId}`
  );
}

export async function saveProject(data: { id: string; pageSchemaUrl: string }) {
  console.log({ data });
  return await http.post(`/project`, data);
}

export async function putScript(pageId: string, content: string) {
  console.log("putScript", content);
  return await putText(`/script/${pageId}`, content);
}

export async function putCompiledScript(pageId: string, content: string) {
  console.log("putCompiledScript", content);
  return await putText(`/compiled-script/${pageId}`, content);
}

export async function compileCode({
  content,
  format,
}: {
  content: string;
  format: "esm" | "cjs" | "iife";
}) {
  return await http.post<any, { content: string }>(`/script/compile`, {
    content,
    format,
  });
}
